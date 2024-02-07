/**
 * Copyright (C) 2023 fhcomplete.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';
import BsModal from '../../../../../js/components/Bootstrap/Modal.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';
import {docTabulatorFilter} from "../docs/docTabulatorFilter.js";
import {docTabulatorFilterDataset} from "../docs/docTabulatorFilterDataset.js";
import {docTabulatorFilterFiltersupdate} from "../docs/docTabulatorFilterFiltersupdate.js";

export const TabulatorFilter = {
	componentName: 'TabulatorFilter',
	components: {
		CoreFilterCmpt,
		BsModal,
		docTabulatorFilter,
		docTabulatorFilterDataset,
		docTabulatorFilterFiltersupdate
	},
	mixins: [ BsModal ],
	emits: [ 'newFilterEntry'],
	methods: {
		getAnrechnungstatusList(){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/FhcTemplate/getAnrechnungstatusList')
				.then(result => result.data)
				.then(result => {
					this.anrechnungstatusList = CoreRESTClient.getData(result).map(x => x.bezeichnung_mehrsprachig);
				})
				.catch(error => { this.$fhcAlert.handleSystemError(error); });
		},
		addAnrechnung(){
			this.modalTitel = 'Anrechnung anlegen';
			this.$refs.modalContainer.show();
		},
		editAnrechnung(id) {
			this.modalTitel = 'Anrechnung ändern';
			this.$refs.modalContainer.show();
		},
		async deleteAnrechnung(id) {
			if (await this.$fhcAlert.confirmDelete() === false) return;
			this.$fhcAlert.alertSuccess('ID' + id + ' deleted')
		},
		changeAnrechnungstatus(cell){
			let status = cell.getValue();
			let anrechnungId = cell.getRow().getIndex();
			this.$fhcAlert.alertSuccess('Status changed');
		}
	},
	data: function() {
		return {
			modalTitel: '',
			anrechnungstatusList: null,
		}
	},
	computed: {
		tabulatorOptions() {
			return {
				index: 'anrechnung_id',	// Unique ID
				maxHeight: "100%",
				minHeight: 100,
				layout: 'fitColumns',	// fitData adds scrollbar if needed. fitColumns squeezes into table width. // TODO fitColumns is default
				rowHeight: 60,		// Condense table
				placeholder: "Keine Daten vorhanden",	// TODO move to core
				columnDefaults:{
					tooltip:true,	// Useful to display long text like Anmerkungen / Notizen / etc.
				},
				columns: [
					{
						formatter: 'rowSelection',
						titleFormatter: 'rowSelection',
						titleFormatterParams: {
							rowRange: "active" // Only toggle the values of the active filtered rows
						},
						frozen: true,
						width: 70
					},
					{title: 'Anrechnung-ID', field: 'anrechnung_id', headerFilter: true, hozAlign: 'right', frozen: true},
					{title: 'Prestudent-ID', field: 'prestudent_id', headerFilter: true, hozAlign: 'right', frozen: true},
					{title: 'Stg-Kz', field: 'studiengang_kz', headerFilter: true, width: 50, hozAlign: 'right', frozen: true},
					{title: 'Studiengang', field: 'stg_bezeichnung', headerFilter: true, frozen: true},
					{title: 'Studiensemester', field: 'studiensemester_kurzbz', headerFilter: true, frozen: true},
					{title: 'Student', field: 'student', headerFilter: true, frozen: true},
					{title: 'LV-ID', field: 'lehrveranstaltung_id', headerFilter: true, hozAlign: 'right'},
					{title: 'LV', field: 'lv_bezeichnung', headerFilter: true},
					{title: 'DMS-ID', field: 'dms_id', headerFilter: true, hozAlign: 'right'},
					{
						title: 'Dokument',
						field: 'dokument_bezeichnung',
						headerFilter: true,
						formatter:"link",
						formatterParams: (cell) => { return {
							labelField:"dokument_bezeichnung",
							url: FHC_JS_DATA_STORAGE_OBJECT.app_root +
								FHC_JS_DATA_STORAGE_OBJECT.ci_router +
								"/" +
								FHC_JS_DATA_STORAGE_OBJECT.called_path +
								"/download?dms_id=" + cell.getRow().getCell('dms_id').getData().dms_id, // TODO korrigieren
							target:"_blank"
						}
						},
						tooltip: (e, cell) =>  cell.getData().datei.titel	// Overwrite table option tooltip, which will return the datei-object
					},
					{title: 'Anmerkung', field: 'anmerkung_student', headerFilter: true},
					{
						title: 'Status',
						field: 'status_kurzbz',
						editor: "list",
						editorParams:{values: this.anrechnungstatusList },
						headerFilter: true,
						headerFilterParams:{values: this.anrechnungstatusList },
						frozen: true
					},
					{
						title: 'Aktionen',
						field: 'actions',
						minWidth: 150,	// Ensures Action-buttons will be always fully displayed
						formatter: (cell, formatterParams, onRendered) => {
							let container = document.createElement('div');
							container.className = "d-flex gap-2";

							let button = document.createElement('button');
							button.className = 'btn btn-outline-secondary btn-action';
							button.innerHTML = '<i class="fa fa-edit"></i>';
							button.addEventListener('click', (event) =>
								this.editAnrechnung(cell.getRow().getIndex())
							);
							container.append(button);

							button = document.createElement('button');
							button.className = 'btn btn-outline-secondary btn-action';
							button.innerHTML = '<i class="fa fa-xmark"></i>';
							button.addEventListener('click', () =>
								this.deleteAnrechnung(cell.getRow().getIndex())
							);
							container.append(button);

							return container;

						},
						frozen: true
					}
				]
			}
		}
	},
	created(){
		// Get initial Anrechnungstatuslist
		this.getAnrechnungstatusList();
	},
	template: `
	<h3 class="h4 mt-3">Tabulator with Filter</h3>
	<core-filter-cmpt v-if="anrechnungstatusList"
		ref="anrechnungTable"
		filter-type="AnrechnungTable"
		:side-menu="false"
		:tabulator-options="tabulatorOptions"
		:tabulator-events="[{ event: 'cellEdited', handler: changeAnrechnungstatus }]"
		:new-btn-label="'Anrechnung'"
		:new-btn-show="true"
		:new-btn-class="btn-primary"
		@click:new="addAnrechnung"
		@nw-new-entry="$emit('newFilterEntry', $event)">
		<template #actions>
			<button class="btn btn-primary">Genehmigen</button>
			<button class="btn btn-danger">Ablehnen</button>
		</template>
	</core-filter-cmpt>
	
	<!-- Modal -->
	<bs-modal ref="modalContainer" class="bootstrap-prompt" v-bind="$props" @hidden-bs-modal="onHiddenBsModal">
		<template #title>{{ modalTitel }}</template>
		<template #default>Content</template>
		<template #footer>
			<button type="button" class="btn btn-primary" @click="onBsModalSave">{{ modalTitel }}</button>
		</template>
	</bs-modal>
	
	<!-- Code Documentation -->
	<doc-tabulator-filter></doc-tabulator-filter>
	<doc-tabulator-filter-dataset></doc-tabulator-filter-dataset>
	<doc-tabulator-filter-filtersupdate></doc-tabulator-filter-filtersupdate>
`
};