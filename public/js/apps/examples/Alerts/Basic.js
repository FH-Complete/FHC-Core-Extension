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

// Create App:
// ==========
const app = Vue.createApp({
	methods: {
		alertSuccess(){
			this.$fhcAlert.alertSuccess('Success');
		},
		alertInfo(){
			this.$fhcAlert.alertInfo('Info');
		},
		alertWarning(){
			this.$fhcAlert.alertWarning('Warning message is sticky');
		},
		alertError(){
			this.$fhcAlert.alertError('Error message is sticky');
		},
		alertDefault(){
			this.$fhcAlert.alertDefault('info', 'My Custom Title', 'My message', true);
		},
		alertMultipleDefault(){
			let msgArr = [
				'Message A',
				'Message B',
				'Message C'
			]
			this.$fhcAlert.alertMultiple(msgArr);
		},
		alertMultipleCustom(){
			let msgArr = [
				'Message A',
				'Message B',
				'Message C'
			]
			this.$fhcAlert.alertMultiple(msgArr, 'success', 'Sticky success messages', true);
		},
		handleSystemMessage(){
			this.$fhcAlert.handleSystemMessage('My serverside implemented message to user');
		},
		handleSystemError(){
			this.$fhcAlert.handleSystemError('System Error Message');
		},
		async confirmDelete(){
			if (await this.$fhcAlert.confirmDelete() === false) return;
		}
	},
	template: `
	<div class="app-example-alerts-basic row">
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.alertSuccess('Success');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertSuccess">Alert Success</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.alertInfo('Info');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertInfo">Alert Info</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.alertWarning('Warning message is sticky');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertWarning">Alert Warning</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.alertError('Error message is sticky');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertError">Alert Error</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.alertDefault('info', 'Mein Custom Titel', 'Meine Message', true);</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertDefault">Alert Default (Custom)</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.handleSystemMessage('My implemented message to user');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemMessage">Handle System-Message</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light"><code>this.$fhcAlert.handleSystemError('System Error Message');</code></div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemError">Handle System-Error</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code><pre>
					async confirmDelete(){
						if (await this.$fhcAlert.confirmDelete() === false) return;
					}
				</pre></code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="confirmDelete">Confirm Delete</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code><pre>
					let msgArr = [
					Message A',
					Message B',
					Message C'
					]

				this.$fhcAlert.alertMultiple(msgArr);</pre></code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleDefault">Alert Multiple Default</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code><pre>
					let msgArr = [
					'Message A',
					'Message B',
					'Message C'
					]

					this.$fhcAlert.alertMultiple(msgArr, 'success', 'Sticky success messages', true);
				</pre></code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleCustom">Alert Multiple Custom</button>
		</div>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// FhcAlert
	.use(FhcAlert)

	// Start the App:
	// =============
	.mount('#example-alert-basic');
