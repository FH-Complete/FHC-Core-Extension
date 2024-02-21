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
import {CoreNavigationCmpt} from '../../../../../../public/js/components/navigation/Navigation.js';
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';
import BsModal from '../../../../../js/components/Bootstrap/Modal.js';
import docTabulatorFilter from "../docs/docTabulatorFilter.js";
import docTabulatorFilterDataset from "../docs/docTabulatorFilterDataset.js";
import docTabulatorFilterFiltersupdate from "../docs/docTabulatorFilterFiltersupdate.js";

export default {
	components: {
		CoreFilterCmpt,
		CoreNavigationCmpt,
		CoreBaseLayout,
		BsModal,
		docTabulatorFilter,
		docTabulatorFilterDataset,
		docTabulatorFilterFiltersupdate
	},
	data: () => {
		return {
			modalTitel: '',
			examplestatusList: null
		}
	},
	computed: {
		tabulatorOptions() {
			return {
				// Unique ID
				index: 'exampledata_id',
				
				// @see: https://tabulator.info/docs/5.2/layout#layout
				// This is the default option and can be omitted.
				layout: 'fitColumns',

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
								url: CoreRESTClient._generateRouterURI('extensions/FHC-Core-Extension/Examples/download/' + cell.getData().dms_id),
								target:"_blank"
							}
						}
					},
					{title: 'Anmerkung', field: 'textval', headerFilter: true},
					{
						title: 'Liste',
						field: 'examplestatus_kurzbz',
						editor: "list",
						editorParams: { values: this.examplestatusList },
						headerFilter: true,
						headerFilterParams: { values: this.examplestatusList },
						formatter: (cell) => this.examplestatusList[cell.getValue()],
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
	created(){
		// Get initial Examplestatuslist
		this.getExamplestatusList();
	},
	methods: {
		addData(){
			this.modalTitel = 'Datensatz anlegen';
			this.$refs.modalContainer.show();
		},
		editData(id) {
			this.modalTitel = 'Datensatz ändern';
			this.$refs.modalContainer.show();
		},
		async deleteData(exampledata_id) {
			if (await this.$fhcAlert.confirmDelete() === false) return;

			CoreRESTClient
				.post('/extensions/FHC-Core-Extension/Examples/deleteExampledata', {
					exampledata_id: exampledata_id
				})
				.then(result => {
					this.$refs.myTabulatorFilter.tabulator.deleteRow(exampledata_id)
				})
				.then(() => {
					this.$fhcAlert.alertSuccess(this.$p.t('global', 'geloescht'));
				})
				.catch(this.$fhcAlert.handleSystemError);
		},
		acceptData() {
			let exampledata_ids = this.$refs.myTabulatorFilter.tabulator.getSelectedRows().map(row => row.getIndex());

			if (exampledata_ids.length === 0) {
				return this.$fhcAlert.alertInfo('Select rows');
			}

			for (const exampledata_id of exampledata_ids) {

				let examplestatus_kurzbz = 'akzeptiert';

				CoreRESTClient
					.post('/extensions/FHC-Core-Extension/Examples/updateExamplestatus', {
						exampledata_id: exampledata_id,
						examplestatus_kurzbz: examplestatus_kurzbz
					})
					.then(result => {
						this.$refs.myTabulatorFilter.tabulator.updateData([{
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
			let exampledata_ids = this.$refs.myTabulatorFilter.tabulator
				.getSelectedRows()
				.map(row => row.getIndex());

			if (exampledata_ids.length === 0) return this.$fhcAlert.alertInfo('Select rows');

			for (const exampledata_id of exampledata_ids) {

				let examplestatus_kurzbz = 'abgelehnt';

				CoreRESTClient
					.post('/extensions/FHC-Core-Extension/Examples/updateExamplestatus', {
						exampledata_id: exampledata_id,
						examplestatus_kurzbz: examplestatus_kurzbz
					})
					.then(result => {
						this.$refs.myTabulatorFilter.tabulator.updateData([{
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
				.get('/extensions/FHC-Core-Extension/Examples/getExamplestatusList')
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
				.post('/extensions/FHC-Core-Extension/Examples/updateExamplestatus', {
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
		}
	},
	template: `
		<!-- Navigation -->
	<core-navigation-cmpt></core-navigation-cmpt>
	
	<!-- Tabulator with Filter -->
	<!-- Content -->
	<core-base-layout
		:title="$p.t('global', 'titel')"
		:subtitle="$p.t('global', 'beschreibung')">
		<template #main>		
			<h3 class="h4 mt-3">Tabulator with Filter</h3>
			<core-filter-cmpt v-if="examplestatusList"
				ref="myTabulatorFilter"
				filter-type="Exampledata"
				:side-menu="false"
				:tabulator-options="tabulatorOptions"
				:tabulator-events="[{ event: 'cellEdited', handler: updateExamplestatus }]"
				new-btn-label="Datensatz"
				new-btn-show
				@click:new="addData"
				reload
			>
			<template #actions>
				<button class="btn btn-primary" @click="acceptData">Datensatz genehmigen</button>
				<button class="btn btn-danger" @click="rejectData">Datensatz ablehnen</button>
			</template>
		</core-filter-cmpt>
	
			<!-- Code Documentation -->
			<doc-tabulator-filter></doc-tabulator-filter>
			<doc-tabulator-filter-dataset></doc-tabulator-filter-dataset>
			<doc-tabulator-filter-filtersupdate></doc-tabulator-filter-filtersupdate>
		</template>
	</core-base-layout>
	
	<!-- Modal -->
	<bs-modal ref="modalContainer" class="bootstrap-prompt">
		<template #title>{{ modalTitel }}</template>
		<template #default>Content</template>
		<template #footer>
			<button type="button" class="btn btn-primary" @click="">{{ modalTitel }}</button>
		</template>
	</bs-modal>
`
};