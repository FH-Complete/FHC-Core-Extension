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
	data() {
		return {
			category: 'category',
			phrase: 'phrase'
		};
	},
	template: `
	<div class="app-example-phrases-dynamic">
		<div class="input-group">
			<div class="input-group-text">Category:</div>
			<input type="text" v-model="category" class="form-control">
			<div class="input-group-text">Phrase:</div>
			<input type="text" v-model="phrase" class="form-control">
			<div class="input-group-text text-muted">{{ $p.t(category, phrase) }}</div>
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
	.mount('#example-phrases-dynamic');
