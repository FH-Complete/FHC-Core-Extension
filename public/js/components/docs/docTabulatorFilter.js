export default {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Basic Structure: Tabulator with Filter</h3>		
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core Navigation-, BaseLayout- Filter and RestClient Components</span>
import {CoreNavigationCmpt} from '../../../../../../public/js/components/navigation/Navigation.js';
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';
export default {
	components: { 
		CoreNavigationCmpt,
		CoreFilterCmpt,
		CoreBaseLayout
	 },
	computed: {
		tabulatorOptions() { 
			return { ... }
		}
	},
},

<span class="text-muted">// Core Navigation</span>
&lt;core-navigation-cmpt&gt;&lt;/core-navigation-cmpt&gt;
	
<span class="text-muted">// Base Layout</span>
&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	
	<span class="text-muted">// Main Content</span>
	&lt;template #main&gt;
		&lt;core-filter-cmpt
			ref="myTabulator"
			filter-type="ExampleTable"			<span class="text-muted">// The file inside your filters folder, that builds the filterCmptArray</span>
			:side-menu="false"				<span class="text-muted">// Mostly use false to render a Filter-Dropdown. True if you want your filters need to be shown in the side menu </span>
			:tabulator-options="tabulatorOptions"
		&lt;/core-filter-cmpt&gt; 
	&lt;/template&gt;	
&lt;/base-layout&gt;			
</pre></code>
</div>
</div>
`
};