/**
 * Copyright (C) 2024 fhcomplete.org
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

// Load Plugins:
// ============
import FhcAlert from "../../../../../../js/plugin/FhcAlert.js";

// Load Helpers:
// =============
import { CoreRESTClient } from "../../../../../../js/RESTClient.js";

// Create App:
// ==========
const app = Vue.createApp({
	methods: {
		async deleteData(id) {
			if (await this.$fhcAlert.confirmDelete() === false)
				return;

			CoreRESTClient
				.post('/extensions/FHC-Core-Extension/FhcTemplate/deleteData/' + id)
				.then(result => {
					this.$fhcAlert.alertSuccess('Datensatz ' + CoreRESTClient.getData(result.data) + ' gelöscht!');
				})
				.catch(this.$fhcAlert.handleSystemError);
		}
	},
	template: `
	<div class="app-example-alerts-example2">
		<button class="btn btn-danger" @click="deleteData(123)">
			Datensatz löschen
		</button>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// FhcAlert
	.use(FhcAlert)

	// Start the App:
	// =============
	.mount('#example-alert-example2');
