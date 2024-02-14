export default {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Basic structure: Table-only Tabulator</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core Filter- and Core RESTClient Component to build your table and handle data</span>
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';
import {CoreRESTClient} from '../../../../../../public/js/RESTClient.js';

export const TabulatorOnly = {
  components: {
    CoreFilterCmpt
  },
  computed: {
        <span class="text-muted">// See below the tabulator options basic example with data load</span>
      	tabulatorOptions() { ... }
  },
  template: \`
  <span class="text-muted">// Tabulator (table-only)</span>
  &lt;core-filter-cmpt
      ref="myTabulator"
      table-only	<span class="text-muted">// True will render tabulator without Filter </span>
      :side-menu="false"	<span class="text-muted">// You dont need side-menu without Filter </span>
      :tabulator-options="tabulatorOptions"
      new-btn-label="Datensatz"
      new-btn-show
      @click:new="addData"
      reload&gt;
  &lt;/core-filter-cmpt&gt; 	
</pre></code>
</div>
</div>
`
};
