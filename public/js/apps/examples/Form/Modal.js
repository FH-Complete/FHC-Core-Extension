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
import FormInput from "../../../../../../js/components/Form/Input.js";
import BsModal from "../../../../../../js/components/Bootstrap/Modal.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		CoreForm,
		FormInput,
		BsModal
	},
	data() {
		return {
			formData: {
				value1: ''
			}
		};
	},
	methods: {
		openModal() {
			this.$refs.myModal.show();
		},
		sendData() {
			this.$refs.myForm
				.post(
					'extensions/FHC-Core-Extension/components/form/modal',
					this.formData
				)
				.then(result => "Got value: " + result.data)
				.then(this.$fhcAlert.alertSuccess)
				.then(this.$refs.myModal.hide)
				.catch(this.$fhcAlert.handleSystemError);
		}
	},
	template: `
	<div class="app-example-form-modal">
		<button class="btn btn-primary" @click="openModal">Open the modal</button>
		<core-form ref="myForm" @submit.prevent="sendData">
			<bs-modal ref="myModal">
				<template #default>
					<form-input
						v-model="formData.value1"
						label="Input*"
						name="value1"
						>
					</form-input>
				</template>
				<template #footer>
					<button type="submit" class="btn btn-primary">Send</button>
				</template>
			</bs-modal>
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
	.mount('#example-form-modal');
