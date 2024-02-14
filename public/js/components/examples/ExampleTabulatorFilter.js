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

import {CoreNavigationCmpt} from '../../../../../../public/js/components/navigation/Navigation.js';
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';
import MyTabulatorFilter from "./MyTabulatorFilter.js"

export default {
	components: {
		CoreNavigationCmpt,
		CoreBaseLayout,
		MyTabulatorFilter
	},
	data: function() {
		return {
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt></core-navigation-cmpt>

	<!-- Content -->
	<core-base-layout
		:title="$p.t('global', 'titel')"
		:subtitle="$p.t('global', 'beschreibung')"
		>
		<template #main>
			<my-tabulator-filter></my-tabulator-filter>
		</template>
	</core-base-layout>
	`
};