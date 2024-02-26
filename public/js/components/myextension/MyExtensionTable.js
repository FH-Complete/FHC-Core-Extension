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
import MyExtensionForm from './MyExtensionForm.js';

export default {
	components: {
		CoreFilterCmpt,
		MyExtensionForm
	},
	data: () => {
		return {
			examplestatusList: null,
		}
	},
	computed: {
		tabulatorOptions() {
			return {
				index: 'exampledata_id',
				layout: 'fitData',
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
					{title: 'ID', field: 'exampledata_id', headerFilter: true, width: 70, hozAlign: 'right', frozen: true, sorter: 'number'},
					{title: 'Core Data', field: 'uid', headerFilter: true, frozen: true},
					{title: 'String', field: 'stringval', headerFilter: true},
					{title: 'Integer', field: 'integerval', headerFilter: true, hozAlign: 'right', sorter: 'number'},
					{title: 'Date', field: 'dateval', headerFilter: true, hozAlign: 'center'},
					{
						title: 'Boolean',
						field: 'booleanval',
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
						field:"moneyval",
						formatter:"money",
						formatterParams:{
							decimal:",",
							thousand:".",
							symbol:"€",
							symbolAfter:true
						},
						sorter: 'number'
					},
					{
						title: 'Files',
						field: 'dokument_bezeichnung',
						headerFilter: true,
						formatter:"link",
						formatterParams: cell => {
							return {
								labelField:"dokument_bezeichnung",
								url: CoreRESTClient._generateRouterURI('extensions/FHC-Core-Extension/MyExtension/download/' + cell.getData().dms_id),
								target:"_blank"
							}
						}
					},
					{title: 'Anmerkung', field: 'textval', headerFilter: true},
					{
						title: 'Liste',
						field: 'examplestatus_kurzbz',
						editor: "list",
						editorParams: { valuesLookup: this.getExamplestatusList },
						headerFilter: true,
						headerFilterParams: { valuesLookup: this.getExamplestatusList },
						formatter: (cell) => this.examplestatusList
							? this.examplestatusList[cell.getValue()]
							: cell.getData().bezeichnung,
						frozen: true
					},
					{
						title: 'Aktionen',
						field: 'actions',
						width: 105,	// Ensures Action-buttons will be always fully displayed
						minWidth: 105,	// Ensures Action-buttons will be always fully displayed
						maxWidth: 105,	// Ensures Action-buttons will be always fully displayed
						formatter: (cell, formatterParams, onRendered) => {
							let container = document.createElement('div');
							container.className = "d-flex gap-2";

							let button = document.createElement('button');
							button.className = 'btn btn-outline-secondary';
							button.innerHTML = '<i class="fa fa-edit"></i>';
							button.addEventListener('click', (event) =>
								this.editData(cell.getRow().getIndex())
							);
							container.append(button);

							button = document.createElement('button');
							button.className = 'btn btn-outline-secondary';
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
	methods: {
		addData(){
			this.$refs.myExtensionForm.openModal(this.$p.t('global', 'datensatzAnlegen'));
		},
		editData(id) {
			this.$refs.myExtensionForm.openModal(this.$p.t('global', 'datensatzBearbeiten'));
		},
		async deleteData(exampledata_id) {
			if (await this.$fhcAlert.confirmDelete() === false) return;

			CoreRESTClient
				.post('/extensions/FHC-Core-Extension/MyExtension/deleteExampledata', {
					exampledata_id: exampledata_id
				})
				.then(result => {
					this.$refs.myExtensionTable.tabulator.deleteRow(exampledata_id)
				})
				.then(() => {
					this.$fhcAlert.alertSuccess(this.$p.t('global', 'geloescht'));
				})
				.catch(this.$fhcAlert.handleSystemError);
		},
		acceptData() {
			let exampledata_ids = this.$refs.myExtensionTable.tabulator.getSelectedRows().map(row => row.getIndex());

			if (exampledata_ids.length === 0) {
				return this.$fhcAlert.alertInfo('Select rows');
			}

			for (const exampledata_id of exampledata_ids) {

				let examplestatus_kurzbz = 'akzeptiert';

				CoreRESTClient
					.post('/extensions/FHC-Core-Extension/MyExtension/updateExamplestatus', {
						exampledata_id: exampledata_id,
						examplestatus_kurzbz: examplestatus_kurzbz
					})
					.then(result => {
						this.$refs.myExtensionTable.tabulator.updateData([{
							exampledata_id: exampledata_id,
							examplestatus_kurzbz: examplestatus_kurzbz,
							bezeichnung: this.examplestatusList[examplestatus_kurzbz]
						}])
					})
					.catch(this.$fhcAlert.handleSystemError);
			}

			this.$fhcAlert.alertSuccess(this.$p.t('global', 'alleAkzeptiert'))
		},
		rejectData() {
			let exampledata_ids = this.$refs.myExtensionTable.tabulator
				.getSelectedRows()
				.map(row => row.getIndex());

			if (exampledata_ids.length === 0) return this.$fhcAlert.alertInfo('Select rows');

			for (const exampledata_id of exampledata_ids) {

				let examplestatus_kurzbz = 'abgelehnt';

				CoreRESTClient
					.post('/extensions/FHC-Core-Extension/MyExtension/updateExamplestatus', {
						exampledata_id: exampledata_id,
						examplestatus_kurzbz: examplestatus_kurzbz
					})
					.then(result => {
						this.$refs.myExtensionTable.tabulator.updateData([{
							exampledata_id: exampledata_id,
							examplestatus_kurzbz: examplestatus_kurzbz,
							bezeichnung: this.examplestatusList[examplestatus_kurzbz]
						}])
					})
					.catch(this.$fhcAlert.handleSystemError);
			}

			this.$fhcAlert.alertSuccess(this.$p.t('global', 'alleAbgelehnt'))
		},
		getExamplestatusList() {
			return CoreRESTClient
				.get('/extensions/FHC-Core-Extension/MyExtension/getExamplestatusList')
				.then(result => result.data)
				.then(result => {
					// Reduce array of objects into one object
					return this.examplestatusList = CoreRESTClient.getData(result).reduce((o, x) => {
						o[x.examplestatus_kurzbz] = x.bezeichnung;
						return o;
					}, {});
				})
				.catch(error => {
					this.$fhcAlert.handleSystemError(error);
				});
		},
		updateExamplestatus(cell) {
			let exampledata_id = cell.getRow().getIndex();
			let examplestatus_kurzbz = cell.getValue();

			CoreRESTClient
				.post('/extensions/FHC-Core-Extension/MyExtension/updateExamplestatus', {
					exampledata_id: exampledata_id,
					examplestatus_kurzbz: examplestatus_kurzbz
				})
				.then(result => {
					cell.getTable().updateData([{
						exampledata_id: exampledata_id,
						examplestatus_kurzbz: examplestatus_kurzbz,
						bezeichnung: this.examplestatusList[examplestatus_kurzbz]
					}]).then(() => {
						this.$fhcAlert.alertSuccess(this.$p.t('ui', 'gespeichert'));
					});
				})
				.catch(this.$fhcAlert.handleSystemError);
		},
		addRow(formData){
			this.$refs.myExtensionTable.tabulator.addRow(formData, true);
		}
	},
	template: `
	<!-- Tabulator with Dropdown-Filter-->
	<core-filter-cmpt
		ref="myExtensionTable"
		filter-type="Exampledata"
		:side-menu="false"
		:tabulator-options="tabulatorOptions"
		:tabulator-events="[{ event: 'cellEdited', handler: updateExamplestatus }]"
		:new-btn-label="$p.t('global', 'datensatz')"
		new-btn-show
		new-btn-class="btn-primary"
		@click:new="addData"
		reload
		>
		<!-- Action Buttons -->
		<template #actions>
			<button class="btn btn-primary" @click="acceptData">{{ $p.t('global', 'datensatzGenehmigen') }}</button>
			<button class="btn btn-danger" @click="rejectData">{{ $p.t('global', 'datensatzAblehnen') }}</button>
		</template>
	</core-filter-cmpt>
	
	<!-- Form -->
	<my-extension-form ref="myExtensionForm" :examplestatusList="examplestatusList" @addRow="addRow"></my-extension-form>
`
};