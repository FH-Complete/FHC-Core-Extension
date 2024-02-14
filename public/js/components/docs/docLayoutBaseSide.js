export default {
	template: `	
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core BaseLayout Component</span>
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';

export const myComponent = {
	components: { CoreBaseLayout },
},

&lt;core-base-layout
	title="Title"
	subtitle="Subtitle"&gt;
	<span class="text-muted">// Set cols for main & side content</span>
	mainCols="9"
	asideCols="3"
	&lt;template #main&gt;	
		<span class="text-muted">// Your main content (components) goes here</span>
	&lt;/template&gt;
	&lt;template #aside&gt;
		<span class="text-muted">// Your side content (components, widgets) goes here</span>
	&lt;/template&gt;
&lt;/core-base-layout&gt;			
</pre></code>
</div>
	`
};