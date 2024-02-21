export const docAlertConfirmDelete = {
	template: `
<div class="card card-body bg-light">
<code><pre>
<span class="text-muted">// Button calls function</span>
&lt;button class="btn btn-danger" @click="deleteData(123)"&gt;Datensatz löschen&lt;/button&gt;

<span class="text-muted">// Function. You need async to await the users confirmation</span>
async deleteData(id){
	if (await this.$fhcAlert.confirmDelete() === false) return;<span class="text-muted">\t// Don't forget to await!</span>

<span class="text-muted">// Confirmed! You can go on...</span>
CoreRESTClient
	.post('/extensions/FHC-Core-Extension/Examples/deleteData/' + id)
	.then(result => { this.$fhcAlert.alertSuccess('Datensatz ' + CoreRESTClient.getData(result.data) + ' gelöscht!') })<span class="text-muted">\t// Alert on success</span>
	.catch(error => { this.$fhcAlert.handleSystemError(error); });<span class="text-muted">\t// Alert on error</span>
}
</pre></code>
</div>
`
};