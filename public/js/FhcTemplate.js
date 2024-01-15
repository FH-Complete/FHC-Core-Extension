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

export const FhcTemplate = {
	components: {
		CoreNavigationCmpt,
		BaseLayout
	},
	data: function() {
		return {
			appTitle: "FHC-Template",
			appSubtitle: "FHC Example Template",
			mainCols: [9],
			asideCols: [3],
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt></core-navigation-cmpt>

	<!-- Content -->
	<base-layout
		:title="appTitle"
		:subtitle="appSubtitle"
		:mainCols="mainCols"
		:asideCols="asideCols"
		:alignToCoreNav="true">
		<template #main></template>
      	<template #aside></template>
	</base-layout>
	`
};