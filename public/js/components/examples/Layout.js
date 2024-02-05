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
import {BaseLayout} from "../Layout/BaseLayout.js";
import {docLayoutBase} from "../docs/docLayoutBase.js";
import {docLayoutBaseSide} from "../docs/docLayoutBaseSide.js";
import {docLayoutLiveExample} from "../docs/docLayoutLiveExample.js";

export const Layout = {
	components: {
		BaseLayout,
		docLayoutBase,
		docLayoutBaseSide,
		docLayoutLiveExample
	},
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			mainCols: [9],
			asideCols: [3]
		}
	},
	template: `
	<h2 class="h3">Base Layout Templates</h2>
	<p class="lead">Use Base Layout Component to structure your site with <b>title, subtitle, main content area</b> and, if you need so, <b>side content area</b> and <b>navigation tabs</b>.</p>
	
	<div class="row-cols my-5">
		<h3 class="h4">Base Layout</h3>
		<div class="row-col card card-body p-4 mt-3">
			<base-layout
				:title="appTitle"
				:subtitle="appSubtitle">
				<template #main>			
					<div class="row-col card card-body h-100">
						<h5>#main slot</h5>
						 mainCols: 12 cols (default)
					</div>
				</template>
			</base-layout>
		</div>
		<!-- Documentation -->
		<doc-layout-base></doc-layout-base>
	</div>
		
	<div class="row-cols my-5">
		<h3 class="h4">Base Layout + Side Content</h3>
		<div class="row-col card card-body p-4  mt-3">
			<base-layout
			:title="appTitle"
			:subtitle="appSubtitle"
			:mainCols="mainCols"
			:asideCols="asideCols">
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
		</base-layout>
		</div>
		<!-- Documentation -->
		<doc-layout-base-side></doc-layout-base-side>
	</div>
	
	<div class="row-cols my-5">
		<h3 class="h4">Live Example</h3>
		<h5 class="h6">This page</h3>
		<!-- Documentation -->
		<doc-layout-live-example></doc-layout-live-example>
	</div>
	
	<div class="row-cols my-5">
		<h3 class="h4">Base Layout + Side Content + Navigation Tabs</h3>
		<div class="row-col card card-body p-4">
			<base-layout
			:title="appTitle"
			:subtitle="appSubtitle"
			:mainCols="mainCols"
			:asideCols="asideCols">
			<template #main>
				<nav-tabs :tabs="tabs"></nav-tabs>			
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
			</template>
		</base-layout>
		</div>
	</div>  
`
};