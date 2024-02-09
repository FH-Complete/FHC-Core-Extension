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
	data() {
		const url_prefix = FHC_JS_DATA_STORAGE_OBJECT.app_root
			+ FHC_JS_DATA_STORAGE_OBJECT.ci_router
			+ '/extensions/FHC-Core-Extension/examples/vuejs/';
		return {
			menu: {
				description: 'VueJS',
				link: url_prefix,
				icon: 'brands fa-vuejs',
				children: [
					{ description: 'Phrases', link: url_prefix + 'phrases/' },
					{ description: 'Forms', link: url_prefix + 'forms/' }
				]
			}
		};
	},
	mounted() {
		document.body.style.position = 'relative';
		new bootstrap.ScrollSpy(document.body, {
			target: '#sidenav'
		});
		if (document.querySelector('[data-bs-toggle="tooltip"]'))
			new bootstrap.Tooltip('[data-bs-toggle="tooltip"]');
	}
});

app
	// Start the App:
	// =============
	.mount('#nav');
