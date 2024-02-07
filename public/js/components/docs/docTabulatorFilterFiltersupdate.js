export const docTabulatorFilterFiltersupdate = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">The Filter itself!</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Add the filter to the core's filtersupdate.php</span>
array(
    'app' => '...',
    'dataset_name' => 'exampleTableData',	<span class="text-muted">// Same name you just declared in your filterCpmtArray</span>
    'filter_kurzbz' => 'ExampleTable',		<span class="text-muted">// Same name you just declared in your Core Filter Component</span>
    'description' => '{Alle Anrechnungen}',	<span class="text-muted">// This name is shown in the side menu</span>
    'sort' => 1,
    'default_filter' => true,
    'filter' => '
      {
        "name": "ExampleTable",			<span class="text-muted">// This name is shown within brackets above the tabulator</span>
        "columns": [],				<span class="text-muted">// Define visible columns</span>
        "filters": []				<span class="text-muted">// The filter operators and conditions applied to this filter</span>
      }
    ',
    'oe_kurzbz' => null
  )
  </pre></code>
</div>
</div>
`
};
