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

import {CoreNavigationCmpt} from '../../../../public/js/components/navigation/Navigation.js';
import {BaseLayout} from "./components/Layout/BaseLayout.js";
import Faqs from "./components/examples/Faqs.js";
import FhcTabs from "../../../js/components/Tabs.js";

export const FhcTemplate = {
	components: {
		CoreNavigationCmpt,
		BaseLayout,
		Faqs,
		FhcTabs
	},
	data: function() {
		return {
			appSideMenuEntries: {},
			faqs: [
				{
					title: 'FAQ 1',
					text: 'Answering FAQ 1'
				},
				{
					title: 'FAQ 2',
					text: 'Answering FAQ 2'
				},
				{
					title: 'FAQ 3',
					text: 'Answering FAQ 3'
				}
			]
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"></core-navigation-cmpt>

	<!-- Content -->
	<base-layout
		title="FHC-Template"
		subtitle="FHC Example Template"
		mainCols="9"
		asideCols="3"
		>
		<template #main>
			<fhc-tabs class="mb-5" :config="{start: { title: 'Start', component: '../../extensions/FHC-Core-Extension/js/components/examples/Alerts.js'}, end: { title: 'Ende', component: '../../extensions/FHC-Core-Extension/js/components/examples/Icons.js'}}"></fhc-tabs>
		</template>
      	<template #aside>
      		<card class="card card-body mb-3">My Sidewidget 1</card>
      		<card class="card card-body mb-3">My Sidewidget 2</card>
      		<card class="card card-body mb-3 h-25">My Sidewidget 3</card>
<!--      		<faqs :faqs="faqs"></faqs>-->
		</template>
	</base-layout>
	`
};