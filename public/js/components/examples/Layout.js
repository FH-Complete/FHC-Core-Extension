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

export const Layout = {
	components: {
		BaseLayout
	},
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			mainCols: [9],
			asideCols: [3]
		}
	},
	methods: {

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
		<div class="card card-body bg-light mt-3">
			<code><pre>
<span class="text-muted">// Import the BaseLayout Component</span>
import {BaseLayout} from "../Layout/BaseLayout.js";

export const myComponent = {
	components: { BaseLayout },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle"
	}
},

&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	&lt;template #main&gt;	
		<span class="text-muted">// Your main content (components) goes here</span>
	&lt;/template&gt;
&lt;/base-layout&gt;			
			</pre></code>
		</div>
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
				<div class="card card-body mb-3">
					Place your side-widgets here
				</div>
				<div class="card card-body mb-3">
					Place your side-widgets here
				</div>
			</template>
		</base-layout>
	</div>
	<div class="card card-body bg-light mt-3">
			<code><pre>
<span class="text-muted">// Import the BaseLayout Component</span>
import {BaseLayout} from "../Layout/BaseLayout.js";

export const myComponent = {
	components: { BaseLayout },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			mainCols: [9],
			asideCols: [3]
	}
},

&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	:mainCols="mainCols"
	:asideCols="asideCols"
	:alignToCoreNav="true"
	&lt;template #main&gt;	
		<span class="text-muted">// Your main content (components) goes here</span>
	&lt;/template&gt;
	&lt;template #aside&gt;
		<span class="text-muted">// Your side content (components, widgets) goes here</span>
	&lt;/template&gt;
&lt;/base-layout&gt;			
			</pre></code>
		</div>
	</div>
	<div class="row-cols my-5">
		<h3 class="h4">Live Example</h3>
		<h5 class="h6">This page</h3>
		
	<div class="card card-body bg-light mt-3">
			<code><pre>
<span class="text-muted">// Import the BaseLayout Component</span>
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
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			mainCols: [9],
			asideCols: [3],
			faqs: [],
			kontakte: [],
			statusText: '',
			statusClass: ''
	}
},

<span class="text-muted">// FHC Core Navigation</span>
&lt;core-navigation-cmpt&gt;&lt;/core-navigation-cmpt&gt;
	
<span class="text-muted">// Base Layout</span>
&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	:mainCols="mainCols"
	:asideCols="asideCols"
	:alignToCoreNav="true"&gt;
	
	<span class="text-muted">// Main Content</span>
	&lt;template #main&gt;	
		&lt;nav-tabs&gt;&lt;/nav-tabs&gt;	<span class="text-muted">// App Navigation Tabs</span>	
	&lt;/template&gt;
	
	<span class="text-muted">// Side Content</span>
	&lt;template #aside&gt;
		&lt;status :statusText="statusText" :statusClass="statusClass"&gt;&lt;/status&gt;
		&lt;faqs :faqs="faqs"&gt;&lt;/faqs&gt;
		&lt;kontakt :kontakte="kontakte"&gt;&lt;/kontakt&gt;
	&lt;/template&gt;
&lt;/base-layout&gt;			
			</pre></code>
		</div>
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