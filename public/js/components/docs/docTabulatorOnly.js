export const docTabulatorOnly = {
	template: `
<div class="row-col">
<h3 class="h4">Basic Table-only structure</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core Filter- and Core RESTClient Component to build your table and handle data</span>
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';

export const TabulatorOnly = {
  components: {
    CoreFilterCmpt
  },
  methods: {
  	setInitTableData(){
	  CoreRESTClient
		.get('/extensions/FHC-Core-Extension/FhcTemplate/getTestData')
		.then(result => result.data)
		.then(result => { this.$refs.myTabulator.tabulator.setData(CoreRESTClient.getData(result))} )
		.catch(error => { this.$fhcAlert.handleSystemError(error); });
	}
  },
  data: function() {
    return {
      <span class="text-muted">// See below the tabulator options and columns example</span>
      tabulatorOptions: { ... }
    }
  },
  <span class="text-muted">// On mounted: Set initial table data</span>
  mounted(){
	  <span class="text-muted">// Be sure the table was built before setting data</span>
	  this.$refs.myTabulator.tabulator.on('tableBuilt', (e, row) => {
	  	this.setInitTableData();
	  }
  },
  template: \`
  <span class="text-muted">// Tabulator (table-only)</span>
  &lt;core-filter-cmpt
      ref="myTabulator"
      :table-only="true"	<span class="text-muted">// True will render tabulator without Filter </span>
      :side-menu="false"	<span class="text-muted">// You dont need side-menu without Filter </span>
      :tabulator-options="tabulatorOptions"&gt;
  &lt;/core-filter-cmpt&gt;
  	
</pre></code>
</div>
</div>
`
};
