export const docLayoutLiveExample = {
	template: `		
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
`
};