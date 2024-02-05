export const docAlertExample = {
	template: `
<div class="card card-body bg-light">
<code><pre>
<span class="text-muted">// Button calls function</span>
&lt;button class="btn btn-primary" @click="getFullName"&gt;Namen anzeigen&lt;/button&gt;

<span class="text-muted">// Function</span>
getFullName(){
  CoreRESTClient
	.get('/extensions/FHC-Core-Extension/FhcTemplate/getFullName')
	.then(result => result.data)\t<span class="text-muted">// Avoid async error message</span>
	.then(result => { this.$fhcAlert.alertInfo('Mein Name ist ' + CoreRESTClient.getData(result)); })<span class="text-muted">\t// Alert on success</span>
	.catch(error => { this.$fhcAlert.handleSystemError(error); });<span class="text-muted">\t// Alert on failure</span>
}
</pre></code>
</div>
`
};