export const docAlertExample = {
	template: `
<div class="card card-body bg-light">
<code><pre>
<span class="text-muted">// Button calls function</span>
&lt;button class="btn btn-primary" @click="getActualDate"&gt;Datum anzeigen&lt;/button&gt;

<span class="text-muted">// Function</span>
getActualDate(){
  CoreRESTClient
	.get('/extensions/FHC-Core-Extension/Examples/getActualDate')
	.then(result => result.data)\t<span class="text-muted">// Avoid async error message</span>
	.then(result => { this.$fhcAlert.alertInfo( CoreRESTClient.getData(result)); })<span class="text-muted">\t// Alert on success</span>
	.catch(error => { this.$fhcAlert.handleSystemError(error); });<span class="text-muted">\t// Alert on failure</span>
}
</pre></code>
</div>
`
};