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
import FormValidation from "../../../../../../js/components/Form/Validation.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		FormValidation
	},
	methods: {
		sendClear() {
			this.$refs.myvalidation.clearValidation();
		},
		sendSuccessWithMsg() {
			this.$refs.myvalidation.setFeedback(true, 'custom success message');
		},
		sendSuccessWithMsgs() {
			this.$refs.myvalidation.setFeedback(true, ['another custom success message', 'yet another custom success message']);
		},
		sendErrorWithMsg() {
			this.$refs.myvalidation.setFeedback(false, 'custom error message');
		},
		sendErrorWithMsgs() {
			this.$refs.myvalidation.setFeedback(false, ['another custom error message', 'yet another custom error message']);
		}
	},
	template: `
	<div class="app-example-form-validation">
		<div class="mb-3">
			<form-validation ref="myvalidation"></form-validation>
		</div>
		<div class="d-flex gap-3">
			<button class="btn btn-primary" @click="sendSuccessWithMsg" title="setFeedback(true, '...')">Send success with 1 message</button>
			<button class="btn btn-primary" @click="sendSuccessWithMsgs" title="setFeedback(true, [...])">Send success with 2 messages</button>
			<button class="btn btn-primary" @click="sendErrorWithMsg" title="setFeedback(false, '...')">Send error with 1 message</button>
			<button class="btn btn-primary" @click="sendErrorWithMsgs" title="setFeedback(false, [...])">Send error with 2 messages</button>
			<button class="btn btn-primary" @click="sendClear" title="clearValidation()">Clear input field</button>
		</div>
	</div>`
});

app
	// Start the App:
	// =============
	.mount('#example-form-validation');
