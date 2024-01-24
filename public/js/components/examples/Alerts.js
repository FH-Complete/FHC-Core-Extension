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
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';

export const Alerts = {
	componentName: 'Alerts',
	methods: {
		alertSuccess(){
			this.$fhcAlert.alertSuccess('Success');
		},
		alertInfo(){
			this.$fhcAlert.alertInfo('Info');
		},
		alertWarning(){
			this.$fhcAlert.alertWarning('Warning message is always sticky');
		},
		alertError(){
			this.$fhcAlert.alertError('Error message is always sticky');
		},
		alertDefault(){
			this.$fhcAlert.alertDefault('info', 'Mein Custom Titel', 'Meine Message', true);
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
			this.$fhcAlert.handleSystemMessage('My implemented message to user');
		},
		handleSystemError(){
			this.$fhcAlert.handleSystemError('System Error Message');
		},
		async confirmDelete(){
			if (await this.$fhcAlert.confirmDelete() === false) return;
		},
		getFullName(){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/FhcTemplate/getFullName')
				.then(result => result.data)
				.then(result => { this.$fhcAlert.alertInfo('Mein Name ist ' + CoreRESTClient.getData(result)); })
				.catch(error => { this.$fhcAlert.handleSystemError(error); });
		},
		async deleteData(id){
			if (await this.$fhcAlert.confirmDelete() === false) return;

			CoreRESTClient
				.post('/extensions/FHC-Core-Extension/FhcTemplate/deleteData/' + id)
				.then(result => { this.$fhcAlert.alertSuccess('Datensatz ' + CoreRESTClient.getData(result.data) + ' gelöscht!') })
				.catch(error => { this.$fhcAlert.handleSystemError(error); });
		}
	},
	template: `
	<div class="row-col mb-5">
		<h2 class="h5">Enable core FhcAlert Plugin in your App</h2><br>
		<div class="card card-body bg-light">
			<pre>
				<code style="white-space: pre-line">
				/* Import plugin into your app */
				import FhcAlert from '../../../../js/plugin/FhcAlert.js';
				
				const app = Vue.createApp({
					components: {
						// components
					}
				});
				
				/* Use plugin in your app */
				app
					.use(FhcAlert)
				 	.mount('#main');
				</code>
			</pre>
		</div>
	</div>
	<div class="row g-3 mb-5">
		<h2 class="h5">Use FhcAlert Plugin from anywhere inside your App</h2><br>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.alertSuccess('Success');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertSuccess">Alert Success</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.alertInfo('Info');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100 w-100" @click="alertInfo">Alert Info</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.alertWarning('Warning message is sticky');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertWarning">Alert Warning</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.alertError('Error message is always sticky');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertError">Alert Error</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.alertDefault('info', 'Mein Custom Titel', 'Meine Message', true);</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertDefault">Alert Default (Custom)</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.handleSystemMessage('My implemented message to user');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemMessage">Handle System-Message</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<code>this.$fhcAlert.handleSystemError('System Error Message');</code>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="handleSystemError">Handle System-Error</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
				<pre>async confirmDelete(){
if (await this.$fhcAlert.confirmDelete() === false) return;
}
				</pre>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="confirmDelete">Confirm Delete</button>
		</div>
				<div class="col-9">
			<div class="card card-body bg-light">
				<pre>let msgArr = [
Message A',
Message B',
Message C'
]
this.$fhcAlert.alertMultiple(msgArr);</code></pre>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleDefault">Alert Multiple Default</button>
		</div>
		<div class="col-9">
			<div class="card card-body bg-light">
								<pre>let msgArr = [
'Message A',
'Message B',
'Message C'
]

this.$fhcAlert.alertMultiple(msgArr, 'success', 'Sticky success messages', true);
				</pre>
			</div>
		</div>
		<div class="col-3">
			<button class="btn btn-outline-secondary w-100" @click="alertMultipleCustom">Alert Multiple Custom</button>
		</div>
	</div>
	<div class="row-col mb-5">
		<h2 class="h5">Example 1: Display Info Alert on Success and handle System Error</h2><br>
		<div class="mb-3"><button class="btn btn-primary" @click="getFullName">Namen anzeigen</button></div>
		<div class="card card-body bg-light">
			<code>
				&lt;button class="btn btn-primary" @click="getFullName"&gt;Namen anzeigen&lt;/button&gt;
			</code>
			<pre>
				<code style="white-space: pre-line">
				/* Explain */
				getFullName(){
				  CoreRESTClient
					.get('/extensions/FHC-Core-Extension/FhcTemplate/getFullName')
					.then(result => result.data)
					.then(result => { this.$fhcAlert.alertInfo('Mein Name ist ' + CoreRESTClient.getData(result)); })
					.catch(error => { this.$fhcAlert.handleSystemError(error); });
				}
				</code>
			</pre>
		</div>
	</div>
	<div class="row-col mb-5">
		<h2 class="h5">Example 2: Use Confirm Dialog on Delete. Display Success Alert on Success and handle System Error</h2><br>
		<div class="mb-3"><button class="btn btn-danger" @click="deleteData(123)">Datensatz löschen</button></div>
		<div class="card card-body bg-light">
		<code>
			&lt;button class="btn btn-danger" @click="deleteData(123)"&gt;Datensatz löschen&lt;/button&gt;
		</code>
		<pre>
			<code style="white-space: pre-line">
			/* Explain */
			async deleteData(id){
				if (await this.$fhcAlert.confirmDelete() === false) return;
	
				CoreRESTClient
					.post('/extensions/FHC-Core-Extension/FhcTemplate/deleteData/' + id)
					.then(result => { this.$fhcAlert.alertSuccess('Datensatz ' + CoreRESTClient.getData(result.data) + ' gelöscht!') })
					.catch(error => { this.$fhcAlert.handleSystemError(error); });
			}
			</code>
		</pre>
	</div>
	</div>
`
};