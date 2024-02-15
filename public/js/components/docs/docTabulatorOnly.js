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
  data: () => {
    return {
      <span class="text-muted">// Your editor lists params</span>
      editorParams: null
    },
  computed: {
	<span class="text-muted">// See below the tabulator options basic example with data load</span>
	tabulatorOptions() { ... }
  },
  created(){
	<span class="text-muted">// On created get initial editor lists</span>
	this.getEditorParams();
  },
  methods: {
	addData(){ ... }
	editData(){ ... }
	deleteData(){ ... }
	getEditorParams(){ ... }
	changeEditorParams(){ ... }
  },
  template: \`
  <span class="text-muted">// Tabulator (table-only)</span>
  <span class="text-muted">// Reactivly build tabulator when initial editorParams is ready</span>
  &lt;core-filter-cmpt v-if="editorParams"
      ref="myTabulator"
      table-only	<span class="text-muted">// True will render tabulator without Filter </span>
      :side-menu="false"	<span class="text-muted">// You dont need side-menu without Filter </span>
      :tabulator-options="tabulatorOptions"
      :tabulator-events="[{ event: 'cellEdited', handler: changeEditorParams }]"	<span class="text-muted">// Use Tabulator events to manipulate tabulator</span>
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
