export const docTabulatorFilterDataset = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Dataset: Get the initial Data for the Tabulator</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
&lt;?php

$filterCmptArray = array(
  	'app' => '...',
  	'datasetName' => 'exampleTableData', <span class="text-muted">// This corresponds to 'dataset_name' in filtersupdate</span>
  	'query' => '<span class="text-muted">// SELECT...</span>',
  	'requiredPermissions' => '...'
);
`
};
