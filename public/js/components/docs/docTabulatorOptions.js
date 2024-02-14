export default {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Tabulator Options: Basic Example</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Basic Example for your Tabulator Options and how to format your columns depending on their data type</span>
tabulatorOptions() {
	return {
		<span class="text-muted">// Data source</span>
		ajaxURL: CoreRESTClient._generateRouterURI('/extensions/FHC-Core-Extension/FhcTemplate/getMyData'),
		ajaxResponse(url, params, response) {
			return CoreRESTClient.getData(response);
		},
		<span class="text-muted">// Unique ID - Tell tabulator the unique id's column field. Use it then with getIndex() method.</span>
		index: 'id',  
		<span class="text-muted">// fitColumns (default) squeezes into table width. fitData adds scrollbar if needed.</span>  	
		layout: 'fitColumns',
		<span class="text-muted">// Condense table size if needed</span>  	
		rowHeight: 60,
		<span class="text-muted">// Column defininitions</span> 
		columns: [
		  <span class="text-muted">// Select-Checkbox</span>
		  {
			formatter: 'rowSelection',
			titleFormatter: 'rowSelection',
			titleFormatterParams: {
			  rowRange: "active" <span class="text-muted">// Only toggle the values of the active filtered rows</span>
			},
			  frozen: true,
			width: 70
		  },
		  <span class="text-muted">// Freeze important data if needed</span>
		  {title: 'ID', field: 'id', headerFilter: true, width: 70, hozAlign: 'right', frozen: true, sorter: 'number'},
		  {title: 'Core Data', field: 'coreData', headerFilter: true, frozen: true},
		  <span class="text-muted">// Integer: use sorter 'number' to correctly sort the string type values</span>
		  {title: 'Integer', field: 'number', headerFilter: true, hozAlign: 'right', sorter: 'number'},
		  <span class="text-muted">// String</span>
		  {title: 'String', field: 'text', headerFilter: true},
		  <span class="text-muted">// Date</span>
		  {title: 'Date', field: 'datum', headerFilter: true, hozAlign: 'center'},
		  <span class="text-muted">// Boolean tickCross: set tristate true to allow filtering true, false and all</span>
		  {
			title: 'Boolean',
			field: 'bool',
			formatter:"tickCross",
			headerFilter:"tickCross",
			headerFilterParams:{"tristate": true},
			hozAlign:"center",
			formatterParams: {
			  tickElement: '&lt;i class="fa fa-check text-success"&gt;&lt;/i&gt;',
			  crossElement: '&lt;i class="fa fa-xmark text-danger"&gt;&lt;/i&gt;'
			}
		  },
		  <span class="text-muted">// Money: use sorter 'number'</span>
		  {
			title:"Money",
			field:"money",
			formatter:"money",
			formatterParams:{
			  decimal:",",
			  thousand:".",
			  symbol:"€",
			  symbolAfter:true
			},
			sorter: 'number'
		  },
		  <span class="text-muted">// File download</span>
		  {
			title: 'File',
			field: 'dokument_bezeichnung',
			headerFilter: true,
			formatter:"link",
			formatterParams: cell => {
			return {
				labelField:"dokument_bezeichnung",
				url: CoreRESTClient._generateRouterURI('extensions/FHC-Core-Extension/MyController/download/' + cell.getData().dms_id),
				target:"_blank"
				}
			}
		  },
		  <span class="text-muted">// Long String: core options defined to show as tooltip</span>
		  {title: 'Anmerkung', field: 'anmerkung', headerFilter: true},
		  <span class="text-muted">// Edit List</span>
		  {
			title: 'Liste',
			field: 'liste',
			editor: "list",
			editorParams:{ values:['Neu', 'Genehmigt', 'Abgelehnt'] },
			headerFilter: true,
			headerFilterParams:{ values:['Neu', 'Genehmigt', 'Abgelehnt'] },
			frozen: true  <span class="text-muted">// Optionally</span>
		  },
		  <span class="text-muted">// Action buttons: freeze them!</span>
		  {
			title: 'Aktionen',
			field: 'actions',
			<span class="text-muted">// width, minWidth and maxWidth: Ensures Action-buttons will be always fully displayed</span>
			width: 105,
			minWidth: 105,
			maxWidth: 105,
			formatter: (cell, formatterParams, onRendered) =&gt; {
			  let container = document.createElement('div');
			  container.className = "d-flex gap-2";
			  <span class="text-muted">// More Buttons</span>
			  let button = document.createElement('button');
			  button.className = 'btn btn-outline-secondary btn-action';
			  button.innerHTML = '...';
			  button.addEventListener('click', () =&gt;
				this.manipulateData(cell.getRow().getIndex())	<span class="text-muted">// See how index is useful here</span>
			  );
			  container.append(button);
			  <span class="text-muted">// Edit Button</span>
			  button = document.createElement('button');
			  button.className = 'btn btn-outline-secondary btn-action';
			  button.innerHTML = '&lt;i class="fa fa-edit"&gt;&lt;/i&gt;';
			  button.addEventListener('click', (event) =&gt;
				this.editData(cell.getRow().getIndex())
			  );
			  container.append(button);
			  <span class="text-muted">// Delete Button</span>
			  button = document.createElement('button');
			  button.className = 'btn btn-outline-secondary btn-action';
			  button.innerHTML = '&lt;i class="fa fa-xmark"&gt;&lt;/i&gt;';
			  button.addEventListener('click', () =&gt;
				this.deleteData(cell.getRow().getIndex())
			  );
			  container.append(button);
		
			  return container;
			},
			frozen: true
		  }
		]
	}
}
</pre></code>
</div>
</div>
`
};
