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
		getFullName(){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/FhcTemplate/getFullName')
				.then(result => result.data)
				.then(result => { this.$fhcAlert.alertInfo('Mein Name ist ' + CoreRESTClient.getData(result)); })
				.catch(this.$fhcAlert.handleSystemError);
		}
	},
	template: `
	<div class="app-example-alerts-example1">
		<button class="btn btn-primary" @click="getFullName">
			Namen anzeigen
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
	.mount('#example-alert-example1');
