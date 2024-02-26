export default {
	template: `
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Add the proper verticalsplit css style to your View</span>
'customCSSs' => array(
	'public/css/components/verticalsplit.css',
	'public/extensions/FHC-Core-Extension/css/FhcMain.css'
)
<pre></code>
</div>

<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core BaseLayout and -Verticalsplit Component</span>
import CoreBaseLayout from '../../../../../../public/js/components/layout/BaseLayout.js';
import CoreVerticalsplit from '../../../../../../public/js/components/verticalsplit/verticalsplit.js';

export const myComponent = {
	components: { 
	  CoreBaseLayout, 
	  CoreVerticalsplit 
	},
},

&lt;core-base-layout
	title="Title"
	subtitle="Subtitle"&gt;
	&lt;template #main&gt;	
	    <span class="text-muted">// Your Core Verticalsplit Component here</span>
	      &lt;core-verticalsplit&gt;
		  &lt;template #top&gt;
			<span class="text-muted">// Place top content / components here</span>
		  &lt;/template&gt;
		  &lt;template #bottom&gt;
			<span class="text-muted">// Place bottom content / components here</span>
		  &lt;/template&gt;
	    &lt;/core-verticalsplit&gt;
	&lt;/template&gt;
&lt;/core-base-layout&gt;			
</pre></code>
</div>
`
};