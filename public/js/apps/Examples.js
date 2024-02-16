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
import { CoreNavigationCmpt } from "../../../../js/components/navigation/Navigation.js";

// Create App:
// ==========
const app = Vue.createApp({
	components: {
		CoreNavigationCmpt
	},
	mounted() {
		document.body.style.position = 'relative';
		new bootstrap.ScrollSpy(document.body, {
			target: '#sidenav'
		});
		document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el, {
			title: function() {
				if (!this.dataset.bsFiles)
					return '';
				return '<ul>' + this.dataset.bsFiles.split(',').map(t => '<li>' + t.trim() + '</li>').join('') + '</ul>';
			}
		}));
	}
});

app
	// Start the App:
	// =============
	.mount('#nav');
