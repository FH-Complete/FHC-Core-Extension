export const docTabulatorFilterParentCmpt = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Parent Component: Base Layout</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
 <span class="text-muted">// Import the Core Navigation- and Base Layout Component.</span>
 <span class="text-muted">// Import your Example Tabulator with Filter Component, which will be used as main content.</span>
 <span class="text-muted">// Import your Side widgets, which will be used in the side content area..</span>
import {CoreNavigationCmpt} from '../../../../public/js/components/navigation/Navigation.js';
import {BaseLayout} from "./components/Layout/BaseLayout.js";
import {TabulatorFilter} from "./components/TabulatorFilter.js";
import {Status} from "./components/Status.js";
import {Faqs} from "./components/Faqs.js";
import {Kontakt} from "./components/Kontakt.js";

export const MyStartsite = {
  components: {
    CoreNavigationCmpt,
    BaseLayout,
    TabulatorFilter,
    Status,
    Faqs,
    Kontakt
  }, 
  <span class="text-muted">// You need to emit new filter data up to the parent component, that contains the core-navigation-cmpt</span>
  emits: [ 'newFilterEntry'],
  data: function() {
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
  template: \`
   <span class="text-muted">// Core Navigation</span>
   <span class="text-muted">// The side menu entries will be updated when a new filter is added</span>
   &lt;core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"&gt;&lt;/core-navigation-cmpt&gt;
  
   <span class="text-muted">// Base Layout</span>
   &lt;base-layout
	  :title="appTitle"
	  :subtitle="appSubtitle"
	  :mainCols="mainCols"
	  :asideCols="asideCols"
	  :alignToCoreNav="true"&gt;
      &lt;template #main&gt;
          <span class="text-muted">// Child Component: Tabulator</span>
          <span class="text-muted">// Update side menu entries, when child component emits new added filter</span>
          &lt;tabulator-filter @new-filter-entry="appSideMenuEntries = $event">&lt;/tabulator-filter&gt;
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
`
};
