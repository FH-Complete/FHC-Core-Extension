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

// Load Components:
// ===============
import FormInput from "../../../../../../js/components/Form/Input.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		FormInput
	},
	data() {
		return {
			value: ''
		};
	},
	methods: {
		sendClear() {
			this.$refs.myinput.clearValidation();
		},
		sendSuccess() {
			this.$refs.myinput.setFeedback(true);
		},
		sendSuccessWithMsg() {
			this.$refs.myinput.setFeedback(true, 'custom success message');
		},
		sendError() {
			this.$refs.myinput.setFeedback(false);
		},
		sendErrorWithMsg() {
			this.$refs.myinput.setFeedback(false, 'custom error message');
		}
	},
	template: `
	<div class="app-example-form-input">
		<div class="mb-3">
			<form-input
				ref="myinput"
				v-model="value"
				label="Label"
				>
			</form-input>
		</div>
		<div class="d-flex gap-3">
			<button class="btn btn-primary" @click="sendSuccess" title="setFeedback(true)">Send success</button>
			<button class="btn btn-primary" @click="sendSuccessWithMsg" title="setFeedback(true, 'custom success message')">Send success with message</button>
			<button class="btn btn-primary" @click="sendError" title="setFeedback(false)">Send error</button>
			<button class="btn btn-primary" @click="sendErrorWithMsg" title="setFeedback(false, 'custom error message')">Send error with message</button>
			<button class="btn btn-primary" @click="sendClear" title="clearValidation()">Clear input field</button>
		</div>
	</div>`
});

app
	// Start the App:
	// =============
	.mount('#example-form-input');
