export const docAppPlugin = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Create App and import essential Plugins</h3>
<div class="card card-body bg-light">
<code><pre>				
<span class="text-muted">// Import Alert- and Phrasen plugins into your app</span>
import FhcAlert from '../../../../js/plugin/FhcAlert.js';

const app = Vue.createApp({
	components: {
		// components
	}
});
				
<span class="text-muted">// Use plugin in your app</span>
app
	.use(FhcAlert)
	.mount('#main');				
</pre></code>
</div>
</div>
	`
};