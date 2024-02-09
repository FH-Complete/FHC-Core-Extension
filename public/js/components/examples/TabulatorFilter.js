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
			let anrechnungId = cell.getRow().getIndex();
			let status = cell.getValue();
			this.$fhcAlert.alertSuccess('Status changed');
		},
		acceptAnrechnung(){ this.$fhcAlert.alertSuccess('Accepted')},
		rejectAnrechnung(){ this.$fhcAlert.alertSuccess('Rejected')}
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
				// Unique ID
				index: 'anrechnung_id',
				
				// @see: https://tabulator.info/docs/5.2/layout#layout
				// This is the default option and can be omitted.
				layout: 'fitDataStretch',

				// Column definitions
				columns: [
					{
						formatter: 'rowSelection',
						titleFormatter: 'rowSelection',
						titleFormatterParams: {
							rowRange: "active" // Only toggle the values of the active filtered rows
						},
						headerSort: false,
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
						formatterParams: cell => {
							return {
								labelField:"dokument_bezeichnung",
								url: CoreRESTClient._generateRouterURI('extensions/FHC-Core-Extension/FhcTemplate/download/' + cell.getData().dms_id),
								target:"_blank"
							}
						}
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
						width: 85,	// Ensures Action-buttons will be always fully displayed
						formatter: (cell, formatterParams, onRendered) => {
							let container = document.createElement('div');
							container.className = "d-flex gap-2";

							let button = document.createElement('button');
							button.className = 'btn btn-outline-secondary';
							button.innerHTML = '<i class="fa fa-edit"></i>';
							button.addEventListener('click', (event) =>
								this.editAnrechnung(cell.getRow().getIndex())
							);
							container.append(button);

							button = document.createElement('button');
							button.className = 'btn btn-outline-secondary';
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
		filter-type="Anrechnungen"
		:side-menu="true"
		:tabulator-options="tabulatorOptions"
		:tabulator-events="[{ event: 'cellEdited', handler: changeAnrechnungstatus }]"
		new-btn-label="'Anrechnung'"
		new-btn-show
		new-btn-class="btn-primary"
		@click:new="addAnrechnung"
		@nw-new-entry="$emit('newFilterEntry', $event)"
		reload
		>
		<template #actions>
			<button class="btn btn-primary" @click="acceptAnrechnung">Genehmigen</button>
			<button class="btn btn-danger" @click="rejectAnrechnung">Ablehnen</button>
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