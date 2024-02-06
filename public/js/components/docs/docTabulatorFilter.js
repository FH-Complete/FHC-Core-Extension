export const docTabulatorFilter = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Child Component: Tabulator with Filter</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Import the Core Filter Component to build your table</span>
import {CoreFilterCmpt} from '../../../../../js/components/filter/Filter.js';

export const TabulatorFilter = {
  components: {
    CoreFilterCmpt
  },
  <span class="text-muted">// You need to emit new filter data up to the parent component, that contains the core-navigation-cmpt</span>
  emits: [ 'newFilterEntry'],
  data: function() {
    return {
      tabulatorOptions: { ... }
    }
  },
  template: \`
  <span class="text-muted">// Tabulator with filter</span>
  &lt;core-filter-cmpt
      ref="myTabulator"
      filter-type="ExampleTable"	<span class="text-muted">// This corresponds to 'filter_kurzbz' in filtersupdate</span>
      :side-menu="true"			<span class="text-muted">// You want your filters to be shown in the side menu </span>
      :tabulator-options="tabulatorOptions"
      @nw-new-entry="$emit('newFilterEntry', $event)"&gt;	<span class="text-muted">// Mandatory when using filter to update the side menu entries</span>
  &lt;/core-filter-cmpt&gt;
  
</pre></code>
</div>
</div>
`
};
