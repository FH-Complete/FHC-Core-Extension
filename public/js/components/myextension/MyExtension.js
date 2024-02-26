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
import CoreTabs from '../../../../../../public/js/components/Tabs.js';
import MyExtensionTable from "./MyExtensionTable.js"
import MyExtensionSidewidget from "./MyExtensionSidewidget.js"
import Faqs from "../examples/Faqs";

export default {
	components: {
		CoreNavigationCmpt,
		CoreBaseLayout,
		CoreTabs,
		MyExtensionTable,
		MyExtensionSidewidget,
		Faqs
	},
	data: () => {
		return {
			tabs : {
				tab1: { title: 'Tab 1', component: '../../extensions/FHC-Core-Extension/js/components/myextension/MyExtensionTable.js'},
				tab2: { title: 'Tab 2', component: '../../extensions/FHC-Core-Extension/js/components/myextension/MyExtensionContent.js'}
			}
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt></core-navigation-cmpt>

	<!-- Base Layout Structure -->
	<core-base-layout
		:title="$p.t('global', 'titel')"
		:subtitle="$p.t('global', 'beschreibung')"
		mainCols="9"
		asideCols="3">
		
		<!-- Main Content-->
		<template #main>
			<core-tabs class="mb-5" :config="tabs"></core-tabs>
		</template>
		
		<!-- Side Content -->
		<template #aside>
			<faqs></faqs>
			<my-extension-sidewidget></my-extension-sidewidget>
			<my-extension-sidewidget></my-extension-sidewidget>
			<my-extension-sidewidget></my-extension-sidewidget>
		</template>
		
	</core-base-layout>
	`
};