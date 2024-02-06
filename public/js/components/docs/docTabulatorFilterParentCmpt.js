export const docTabulatorFilterParentCmpt = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Parent Component: Base Layout</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
import {CoreNavigationCmpt} from '../../../../public/js/components/navigation/Navigation.js';
import {BaseLayout} from "./components/Layout/BaseLayout.js";
import {TabulatorFilter} from "./components/TabulatorFilter.js";

export const MyStartsite = {
  components: {
    CoreNavigationCmpt,
    BaseLayout,
    TabulatorFilter
  }, 
  data: function() {
    return {
	  appSideMenuEntries: {},
    }
  },
  template: \`
   <span class="text-muted">// Core Navigation</span>
   &lt;core-navigation-cmpt :add-side-menu-entries="appSideMenuEntries"&gt;&lt;/core-navigation-cmpt&gt;
  
   <span class="text-muted">// Base Layout</span>
   &lt;base-layout
      title="myTitle"
      subtitle="mySubtitle"
      mainCols="9"			
      asideCols="3"&gt;
      &lt;template #main&gt;
          <span class="text-muted">// Child Component: Tabulator</span>
          <span class="text-muted">// Update side menu entries, when child component emits new added filter</span>
          &lt;tabulator-filter @new-filter-entry="appSideMenuEntries = $event">&lt;/tabulator-filter&gt;
      &lt;/template&gt;    
  &lt;/base-layout&gt; 
</pre></code>
</div>
</div>
`
};
