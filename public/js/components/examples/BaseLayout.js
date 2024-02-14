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
import docLayoutBase from "../docs/docLayoutBase";
import docLayoutBaseSide from "../docs/docLayoutBaseSide";

export default {
	components: {
		CoreNavigationCmpt,
		CoreBaseLayout,
		docLayoutBase,
		docLayoutBaseSide
	},
	data: function() {
		return {
		}
	},
	template: `
	<!-- Navigation -->
	<core-navigation-cmpt></core-navigation-cmpt>

	<!-- Content -->
	<h1>Base Layout<p class="lead">/public/js/components/layout/BaseLayout.js</p></h1>
	<p class="lead">Use Base Layout Component to structure your site with <b>title, subtitle, main content area</b> and, if you need so, <b>side content area</b> and <b>navigation tabs</b>.</p>
	<div class="row-cols">
		<h3 class="h4">Base Layout</h3>
		<div class="row-col card card-body p-4 mt-3">
			<core-base-layout
				title="Title"
				subtitle="Subtitle">
				<template #main>			
					<div class="row-col card card-body h-100">
						<h5>#main slot</h5>
						 mainCols: 12 cols (default)
					</div>
				</template>
			</core-base-layout>
		</div>
		<!-- Code Documentation -->
		<doc-layout-base></doc-layout-base>
	</div>
	
	<div class="row-cols my-5">
		<h3 class="h4">Base Layout + Side Content</h3>
		<div class="row-col card card-body p-4  mt-3">
		<core-base-layout
			:title="$p.t('global', 'titel')"
			:subtitle="$p.t('global', 'beschreibung')"
			mainCols="9"
			asideCols="3">
			<template #main>
				<div class="row-col card card-body h-100">
					<h5>#main slot</h5>
					mainCols: 9 cols (you can adapt)
				</div>
			</template>
			<template #aside>
				<div class="card card-body mb-3">
						<h5>#aside slot</h5>
						asideCols: 3 cols (you can adapt)
				</div>
				<div class="card card-body mb-3">Place your side-widgets here</div>
				<div class="card card-body mb-3">Place your side-widgets here</div>
			</template>
		</core-base-layout>
		</div>
		<!-- Code Documentation -->
		<doc-layout-base-side></doc-layout-base-side>
	</div>
	`
};