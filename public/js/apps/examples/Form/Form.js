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
import FhcApi from "../../../../../../js/plugin/FhcApi.js";

// Load Components:
// ===============
import CoreForm from "../../../../../../js/components/Form/Form.js";
import FormValidation from "../../../../../../js/components/Form/Validation.js";
import FormInput from "../../../../../../js/components/Form/Input.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		CoreForm,
		FormValidation,
		FormInput
	},
	data() {
		return {
			value1: '',
			value2: ''
		};
	},
	methods: {
		sendClear() {
			this.$refs.myform.clearValidation();
		},
		sendSuccess() {
			this.$refs.myform.setFeedback(true, {
				_global: [
					'custom success message 1 for <form-validation>',
					'custom success message 2 for <form-validation>'
				],
				myinput1: 'custom success message for Input 1 (myinput1)',
				myinput2: 'custom success message for Input 2 (myinput2)'
			});
		},
		sendError() {
			this.$refs.myform.setFeedback(false, {
				_global: [
					'custom error message 1 for <form-validation>',
					'custom error message 2 for <form-validation>'
				],
				myinput1: 'custom error message for Input 1 (myinput1)',
				myinput2: 'custom error message for Input 2 (myinput2)'
			});
		},
		sendPost() {
			this.$refs.myform
				.post(
					'extensions/FHC-Core-Extension/components/form/postExample',
					{
						myinput1: this.value1,
						myinput2: this.value2
					}
				)
				.then(result => {
					this.$fhcAlert.alertSuccess(result.data);
				})
				.catch(this.$fhcAlert.handleSystemError);
		}
	},
	template: `
	<div class="app-example-form-form">
		<core-form ref="myform" @submit.prevent>
			<div class="mb-3">
				<form-validation></form-validation>
			</div>
			<div class="row mb-3">
				<div class="col-6">
					<form-input
						v-model="value1"
						label="Input 1*"
						name="myinput1"
						>
					</form-input>
				</div>
				<div class="col-6">
					<form-input
						v-model="value2"
						label="Input 2*"
						name="myinput2"
						>
					</form-input>
				</div>
			</div>
			<div class="d-flex gap-3">
				<button class="btn btn-primary" @click="sendSuccess" title="setFeedback(true, {...})">Send success</button>
				<button class="btn btn-primary" @click="sendError" title="setFeedback(false, {...})">Send error</button>
				<button class="btn btn-primary" @click="sendClear" title="clearValidation()">Clear form</button>
				<button class="btn btn-primary" @click="sendPost" title="post(..., {...})">Send via POST request</button>
			</div>
		</core-form>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// PrimeVue3
	.use(primevue.config.default, {
		zIndex: {
			overlay: 1100
		}
	})
	// FhcApi
	.use(FhcApi)

	// Start the App:
	// =============
	.mount('#example-form-form');
