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
import {NavTabs} from "./components/Layout/NavTabs.js";
import {Status} from "./components/Status.js";
import {Faqs} from "./components/Faqs.js";
import {Kontakt} from "./components/Kontakt.js";

export const FhcTemplate = {
	components: {
		CoreNavigationCmpt,
		BaseLayout,
		NavTabs,
		Status,
		Faqs,
		Kontakt
	},
	data: function() {
		return {
			appTitle: "FHC-Template",
			appSubtitle: "FHC Example Template",
			appSideMenuEntries: {},
			mainCols: [9],
			asideCols: [3],
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
			],
			kontakte: [
				{
					uid: 'uid',
					vorname: 'Vorname',
					nachname: 'Nachname',
					email: 'uid@technikum-wien.at',
					phone: '+43 1 333 40 77 - 0000',
					raum: 'F3.04'
				}
			],
			statusText: 'Genehmigt',
			statusClass: 'success'
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"></core-navigation-cmpt>

	<!-- Content -->
	<base-layout
		:title="appTitle"
		:subtitle="appSubtitle"
		:mainCols="mainCols"
		:asideCols="asideCols"
		:alignToCoreNav="true">
		<template #main>
			<nav-tabs @new-filter-entry="appSideMenuEntries = $event"></nav-tabs>	
		</template>
      	<template #aside>
      		<status :statusText="statusText" :statusClass="statusClass"></status>
      		<faqs :faqs="faqs"></faqs>
      		<kontakt :kontakte="kontakte"></kontakt>
		</template>
	</base-layout>
	`
};