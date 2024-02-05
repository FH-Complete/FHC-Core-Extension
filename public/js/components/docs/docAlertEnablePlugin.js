export const docAlertEnablePlugin = {
	template: `
<div class="card card-body bg-light">
<code><pre>				
<span class="text-muted">// Import plugin into your app</span>
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
	`
};