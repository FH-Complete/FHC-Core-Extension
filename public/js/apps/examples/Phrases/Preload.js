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

// Create App:
// ==========
const app = Vue.createApp({
	methods: {
		loadAndAlert() {
			this.$p.loadCategory('anrechnung').then(() => {
				alert(this.$p.t('anrechnung/benotungDerLV'));
			});
		},
		onlyAlert() {
			alert(this.$p.t('anrechnung/benotungDerLV'));
		}
	},
	template: `
	<div class="app-example-phrases-preload">
		<div class="d-flex flex-column gap-3">
			<button @click="onlyAlert" class="btn btn-outline-secondary">
				Alert <i>anrechnung/benotungDerLV</i>
			</button>
			<button @click="loadAndAlert" class="btn btn-outline-secondary">
				Load category and then alert <i>anrechnung/benotungDerLV</i>
			</button>
		</div>
		<p class="alert alert-info mb-0 mt-3">
			<i class="fa-solid fa-triangle-exclamation"></i>
			Note that once the second Button is pressed and the category is loaded. The first Button also shows the correct phrase.
		</p>
	</div>`
});

app
	// Use Plugins:
	// ===========
	// Phrasen
	.use(Phrasen)

	// Start the App:
	// =============
	.mount('#example-phrases-preload');
