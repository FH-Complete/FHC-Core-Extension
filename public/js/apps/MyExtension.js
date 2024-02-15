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

import BaseLayout from '../components/examples/BaseLayout.js';
import ExampleTabulatorOnly from '../components/examples/ExampleTabulatorOnly.js';
import ExampleTabulatorFilter from '../components/examples/ExampleTabulatorFilter.js';
import Icons from '../components/examples/Icons.js';
import TabulatorOnly from '../components/examples/TabulatorOnly.js';
import TabulatorFilter from '../components/examples/TabulatorFilter.js';
import FhcAlert from '../../../../js/plugin/FhcAlert.js';
import Phrasen from '../../../../js/plugin/Phrasen.js';
import FhcApi from "../../../../js/plugin/FhcApi.js";
const app = Vue.createApp({
	components: {
		BaseLayout,
		TabulatorOnly,
		TabulatorFilter,
		ExampleTabulatorOnly,
		ExampleTabulatorFilter,
		Icons
	}
});

app
	.use(primevue.config.default, {zIndex: {overlay: 9999}})
	.use(FhcAlert)
	.use(Phrasen)
	.use(FhcApi)
	.mount('#main');