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

export default {
	components: {
		CoreFilterCmpt,
	},
	data: function() {
		return {
		}
	},
	computed: {
		tabulatorOptions() {
			return {
				// Data source
				ajaxURL: CoreRESTClient._generateRouterURI('/extensions/FHC-Core-Extension/FhcTemplate/getTestData'),
				ajaxResponse(url, params, response) {
					return CoreRESTClient.getData(response);
				},
				index: 'id',
				layout: 'fitDataStretch',
				// Column definitions
				columns: [
					{title: 'ID', field: 'id', headerFilter: true, width: 70, hozAlign: 'right', frozen: true, sorter: 'number'},
					{title: 'Core Data', field: 'coreData', headerFilter: true, frozen: true},
					{title: 'Integer', field: 'number', headerFilter: true, hozAlign: 'right', sorter: 'number'},
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
						},
						sorter: 'number'
					},
					{
						title: 'File',
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
					{title: 'Anmerkung', field: 'anmerkung', headerFilter: true}
				]
			}
		}
	},
	template: `
	<!-- Tabulator (table-only) -->
	<core-filter-cmpt 
		ref="myTabulator"
		table-only
		:side-menu="false"
		:tabulator-options="tabulatorOptions">
	</core-filter-cmpt>
`
};