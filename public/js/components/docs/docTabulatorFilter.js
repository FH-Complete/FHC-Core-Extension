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
	data: () => {
		return {
			modalTitel: '',
			anrechnungstatusList: null
	},
	computed: {
		tabulatorOptions() { 
			return { ... }
		}
	},
	created(){
		<span class="text-muted">// On created get initial editor lists</span>
		this.getAnrechnungstatusList();
	},
	methods: {
		getAnrechnungstatusList(){
			CoreRESTClient
				.get('/extensions/FHC-Core-Extension/FhcTemplate/getAnrechnungstatusList')
				.then(result => result.data)
				.then(result => {
					this.anrechnungstatusList = CoreRESTClient.getData(result).map(x => x.bezeichnung_mehrsprachig);
				})
				.catch(error => { this.$fhcAlert.handleSystemError(error); });
			}
		}
	}
},

<span class="text-muted">// Core Navigation</span>
&lt;core-navigation-cmpt&gt;&lt;/core-navigation-cmpt&gt;
	
<span class="text-muted">// Base Layout</span>
&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	
	<span class="text-muted">// Main Content</span>
	&lt;template #main&gt;
		<span class="text-muted">// Reactivly build tabulator when initial anrechnungstatusList is ready</span>
		&lt;core-filter-cmpt v-if="anrechnungstatusList"
			ref="myTabulator"
			filter-type="ExampleTable"			<span class="text-muted">// The file inside your filters folder, that builds the filterCmptArray</span>
			:side-menu="false"				<span class="text-muted">// Mostly use false to render a Filter-Dropdown. True if you want your filters need to be shown in the side menu </span>
			:tabulator-options="tabulatorOptions"
			:tabulator-events="[{ event: 'cellEdited', handler: changeAnrechnungstatus }]"	<span class="text-muted">// Use Tabulator events to manipulate tabulator</span>
		&lt;/core-filter-cmpt&gt; 
	&lt;/template&gt;	
&lt;/base-layout&gt;			
</pre></code>
</div>
</div>
`
};