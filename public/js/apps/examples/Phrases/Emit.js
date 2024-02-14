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
import Phrasen from "../../../../../../js/plugin/Phrasen.js";

// Load Components:
// ===============
import EmitEmitting from "../../../components/examples/Phrases/Emit/Emitting.js";
import EmitReceiving from "../../../components/examples/Phrases/Emit/Receiving.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		EmitEmitting,
		EmitReceiving
	},
	data() {
		return {
			someValue: ''
		};
	},
	methods: {
		onCustomEvent(event) {
			this.someValue = event;
		}
	},
	template: `
	<div class="app-example-phrases-emit">
		<div class="row">
			<div class="col-6">
				<b>Emitting Component</b><hr>
				<emit-emitting @customEvent="onCustomEvent"></emit-emitting>
			</div>
			<div class="col-6">
				<b>Receiving Component</b><hr>
				<emit-receiving :someValue="someValue"></emit-receiving>
			</div>
		</div>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// Phrasen
	.use(Phrasen)

	// Start the App:
	// =============
	.mount('#example-phrases-emit');
