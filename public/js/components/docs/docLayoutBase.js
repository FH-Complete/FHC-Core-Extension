export default {
	template: `
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core BaseLayout Component</span>
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';

export const myComponent = {
	components: { CoreBaseLayout },
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
		<span class="text-muted">// Your main content (components) goes here</span>
	&lt;/template&gt;
&lt;/core-base-layout&gt;			
</pre></code>
</div>
`
};