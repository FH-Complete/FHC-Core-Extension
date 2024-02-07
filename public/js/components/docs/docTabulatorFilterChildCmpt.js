export const docTabulatorFilterChildCmpt = {
	template: `		
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the BaseLayout Component</span>
import {CoreNavigationCmpt} from '../../../../public/js/components/navigation/Navigation.js';
import {BaseLayout} from "./components/Layout/BaseLayout.js";
import {TabulatorFilter} from "./components/TabulatorFilter.js";
import {Status} from "./components/Status.js";
import {Faqs} from "./components/Faqs.js";
import {Kontakt} from "./components/Kontakt.js";

export const FhcTemplate = {
	components: { 
		CoreNavigationCmpt,
		BaseLayout,
		NavTabs,
		TabulatorFilter,
		Status,
		Faqs,
		Kontakt
	 },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle",
			appSideMenuEntries: {},
			mainCols: [9],
			asideCols: [3],
			faqs: [],
			kontakte: [],
			statusText: '',
			statusClass: ''
	}
},

<span class="text-muted">// Core Navigation</span>
&lt;core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"&gt;&lt;/core-navigation-cmpt&gt;
	
<span class="text-muted">// Base Layout</span>
&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"
	:mainCols="mainCols"
	:asideCols="asideCols"
	:alignToCoreNav="true"&gt;
	
	<span class="text-muted">// Main Content</span>
	&lt;template #main&gt;
          <span class="text-muted">// Child Component: Tabulator</span>
          <span class="text-muted">// Update side menu entries, when new filter is added</span>
          &lt;tabulator-filter @new-filter-entry="appSideMenuEntries = $event">&lt;/tabulator-filter&gt;
    &lt;/template&gt;
	
	<span class="text-muted">// Side Content</span>
	&lt;template #aside&gt;
	  <span class="text-muted">// Child Components: Side Widgets</span>
	  &lt;status :statusText="statusText" :statusClass="statusClass"&gt;&lt;/status&gt;
	  &lt;faqs :faqs="faqs"&gt;&lt;/faqs&gt;
	  &lt;kontakt :kontakte="kontakte"&gt;&lt;/kontakt&gt;
	&lt;/template&gt;
&lt;/base-layout&gt;			
</pre></code>
</div>
`
};