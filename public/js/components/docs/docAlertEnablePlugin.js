export const docAlertEnablePlugin = {
	template: `
<div class="row-col my-5">
<h3 class="h4">Enable FhcAlert Core Plugin in your App</h3>
<p class="">FhcAlert core plugin is using <a href="https://primevue.org/toast/" target="_blank">PrimeVue Toast</a> and <a href="https://primevue.org/confirmdialog/" target="_blank">PrimeVue ConfirmDialog</a> Components. They are installed and initialized inside the plugin. <br>
To use it, import FhcAlert core plugin once into your app, to then use it from anywhere inside your app.</p>
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
</div>
	`
};