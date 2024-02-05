export const docLayoutBase = {
	template: `
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the BaseLayout Component</span>
import {BaseLayout} from "../Layout/BaseLayout.js";

export const myComponent = {
	components: { BaseLayout },
	data: () => {
		return {
			appTitle: "Title",
			appSubtitle: "Subtitle"
	}
},

&lt;base-layout
	:title="appTitle"
	:subtitle="appSubtitle"&gt;
	&lt;template #main&gt;	
		<span class="text-muted">// Your main content (components) goes here</span>
	&lt;/template&gt;
&lt;/base-layout&gt;			
</pre></code>
</div>
`
};