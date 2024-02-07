export const docTabulatorFilter = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Basic Structure: Tabulator with Filter</h3>		
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core Navigation- and BaseLayout Component</span>
import {CoreNavigationCmpt} from '../../../../public/js/components/navigation/Navigation.js';
import {BaseLayout} from "./components/Layout/BaseLayout.js";

export const FhcTemplate = {
	components: { 
		CoreNavigationCmpt,
		BaseLayout
	 },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			appSideMenuEntries: {},
			tabulatorOptions: { ... }
	}
},

<span class="text-muted">// Core Navigation</span>
<span class="text-muted">// The side menu entries will be updated when a new filter is added</span>
&lt;core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"&gt;&lt;/core-navigation-cmpt&gt;
	
<span class="text-muted">// Base Layout</span>
&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"
	:alignToCoreNav="true"&gt;
	
	<span class="text-muted">// Main Content</span>
	&lt;template #main&gt;
		<span class="text-muted">// Child Component: Tabulator with Filter</span>
		<span class="text-muted">// Update side menu entries, when new filter is added</span>
		&lt;core-filter-cmpt
			ref="myTabulator"
			filter-type="ExampleTable"			<span class="text-muted">// This corresponds to 'filter_kurzbz' in filtersupdate</span>
			:side-menu="false"				<span class="text-muted">// False will render a Filter-Dropdown. True if you want your filters to be shown in the side menu </span>
			:tabulator-options="tabulatorOptions"
			@nw-new-entry="appsideMenuEntries = $event"&gt;	<span class="text-muted">// Mandatory when using filter to update the side menu entries: Emits new filter to parent component.</span>
		&lt;/core-filter-cmpt&gt; 
	&lt;/template&gt;	
&lt;/base-layout&gt;			
</pre></code>
</div>
</div>
`
};