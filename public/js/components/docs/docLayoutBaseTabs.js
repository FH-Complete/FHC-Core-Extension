export default {
	template: `
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core BaseLayout and -Tabs Component</span>
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';
import CoreTabs from '../../../../../../public/js/components/Tabs.js';

export const myComponent = {
	components: { CoreBaseLayout, CoreTabs },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle"
	}
},

&lt;core-base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	&lt;template #main&gt;	
	    <span class="text-muted">// Your Core Tabs Component here</span>
	    &lt;core-tabs :config="{ start: { title: 'Start', component: '../../extensions/FHC-Core-Extension/js/components/startCmpt.js'}, end: { title: 'Ende', component: '../../extensions/FHC-Core-Extension/js/components/endCmpt.js'}}"&gt;&lt;/core-tabs&gt;
	&lt;/template&gt;
&lt;/core-base-layout&gt;			
</pre></code>
</div>
`
};