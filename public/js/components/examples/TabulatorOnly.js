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
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';
import BsModal from '../../../../../js/components/Bootstrap/Modal.js';
import {docTabulatorOnly} from "../docs/docTabulatorOnly.js";
import {docTabulatorOptions} from "../docs/docTabulatorOptions.js";

export const TabulatorOnly = {
	componentName: 'TabulatorOnly',
	components: {
		CoreFilterCmpt,
		BsModal,
		docTabulatorOnly,
		docTabulatorOptions
	},
	mixins: [
		BsModal
	],
	methods: {
		setInitTableData(){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/FhcTemplate/getTestData')
				.then(result => result.data)
				.then(result => { this.$refs.myTabulator.tabulator.setData(CoreRESTClient.getData(result))} )
				.catch(error => { this.$fhcAlert.handleSystemError(error); });
		},
		addData(){
			this.modalTitel = 'Datensatz anlegen';
			this.$refs.modalContainer.show();
		},
		editData(id) {
			this.modalTitel = 'Datensatz ändern';
			this.$refs.modalContainer.show();
		},
		manipulateData(id) { this.$fhcAlert.alertInfo('ID' + id + ' do some Action') },
		async deleteData(id) {
			if (await this.$fhcAlert.confirmDelete() === false) return;
			this.$fhcAlert.alertSuccess('ID' + id + ' deleted')
		},
		acceptData(){ this.$fhcAlert.alertSuccess('Accepted')},
		rejectData(){ this.$fhcAlert.alertSuccess('Rejected')}
	},
	data: function() {
		return {
			modalTitel: '',
			tabulatorOptions: {
				index: 'id',	// Unique ID
				maxHeight: "100%",
				minHeight: 100,
				layout: 'fitColumns',	// fitData adds scrollbar if needed. fitColumns squeezes into table width.
				rowHeight: 60,		// Condense table
				placeholder: "Keine Daten vorhanden",	// TODO move to core
				columnDefaults:{
					tooltip:true,	// Useful to display long text like Anmerkungen / Notizen / etc.  // TODO move to core
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
					{title: 'ID', field: 'id', headerFilter: true, width: 70, hozAlign: 'right', frozen: true},
					{title: 'Core Data', field: 'coreData', headerFilter: true, frozen: true},
					{title: 'Integer', field: 'number', headerFilter: true, hozAlign: 'right'},
					{title: 'String', field: 'text', headerFilter: true},
					{title: 'Date', field: 'datum', headerFilter: true, hozAlign: 'center'},
					{
						title: 'Boolean',
						field: 'bool',
						formatter:"tickCross",
						headerFilter:"tickCross",
						headerFilterParams:{"tristate": true},
						hozAlign:"center",
						formatterParams: {
							tickElement: '<i class="fa fa-check text-success"></i>',
							crossElement: '<i class="fa fa-xmark text-danger"></i>'
						}
					},
					{
						title:"Money",
						field:"money",
						formatter:"money",
						formatterParams:{
							decimal:",",
							thousand:".",
							symbol:"€",
							symbolAfter:true
						}
					},
					{
						// TODO umändern, da dms_id eigene row ist in query
						title: 'File',
						field: 'datei',
						headerFilter: true,
						formatter:"link",
						formatterParams: (cell) => { return {
							labelField:"datei.titel",
							url: FHC_JS_DATA_STORAGE_OBJECT.app_root +
								FHC_JS_DATA_STORAGE_OBJECT.ci_router +
								"/" +
								FHC_JS_DATA_STORAGE_OBJECT.called_path +
								"/download?dms_id=" + cell.getData().datei.dms_id,
							target:"_blank"
							}
						},
						tooltip: (e, cell) =>  cell.getData().datei.titel	// Overwrite table option tooltip, which will return the datei-object
					},
					{title: 'Anmerkung', field: 'anmerkung', headerFilter: true},
					// TODO value array als function oder als data?
					{
						title: 'Liste',
						field: 'liste',
						editor: "list",
						editorParams:{values:['Neu', 'Genehmigt', 'Abgelehnt']},
						headerFilter: true,
						headerFilterParams:{values:['Neu', 'Genehmigt', 'Abgelehnt']},
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
							button.innerHTML = '...';
							button.addEventListener('click', () =>
								this.manipulateData(cell.getRow().getIndex())
							);
							container.append(button);

							button = document.createElement('button');
							button.className = 'btn btn-outline-secondary btn-action';
							button.innerHTML = '<i class="fa fa-edit"></i>';
							button.addEventListener('click', (event) =>
								this.editData(cell.getRow().getIndex())
							);
							container.append(button);

							button = document.createElement('button');
							button.className = 'btn btn-outline-secondary btn-action';
							button.innerHTML = '<i class="fa fa-xmark"></i>';
							button.addEventListener('click', () =>
								this.deleteData(cell.getRow().getIndex())
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
	mounted(){
		this.$refs.myTabulator.tabulator.on('tableBuilt', (e, row) => {
			this.setInitTableData();
		});
	},
	template: `
	<!-- Tabulator (table-only) -->
	<h3 class="h4">Tabulator without Filter (table-only)</h3>
	<p class="lead mb-4">Tabulator without Filter will render your table with the select columns functionality ( <i class="fa fa-table-columns"></i> )  by default.<br>
	You can easily add an Add-Button, Refresh-Button and Action-Buttons to handle multiple rows at once. Column formatters are used to keep same look&feel.
	</p>
	<core-filter-cmpt 
		ref="myTabulator"
		:table-only="true"
		:side-menu="false"
		:tabulator-options="tabulatorOptions"
		:new-btn-label="'Datensatz'"
		:new-btn-show="true"
		:new-btn-class="btn-primary"
		@click:new="addData"
		:reload="true">
		<template #actions>
			<button class="btn btn-primary" @click="acceptData">Datensatz genehmigen</button>
			<button class="btn btn-danger" @click="rejectData">Datensatz ablehnen</button>
		 	<div class="d-flex gap-2 align-items-baseline">
				<select class="form-select" aria-label="Default select example">
  					<option selected>Aktion wählen...</option>
					<option value="1">Status zurücksetzen</option>
				  	<option value="2">Datensatz drucken</option>
				  	<option value="3">Datensatz löschen</option>
				</select>
			</div>
		</template>
	</core-filter-cmpt>
	
	<!-- Code Documentation -->
	<doc-tabulator-only></doc-tabulator-only>
	<doc-tabulator-options></doc-tabulator-options>
	
	<!-- Modal -->
	<bs-modal ref="modalContainer" class="bootstrap-prompt" v-bind="$props" @hidden-bs-modal="onHiddenBsModal">
		<template #title>{{ modalTitel }}</template>
		<template #default>Content</template>
		<template #footer>
			<button type="button" class="btn btn-primary" @click="onBsModalSave">{{ modalTitel }}</button>
		</template>
	</bs-modal>
`
};