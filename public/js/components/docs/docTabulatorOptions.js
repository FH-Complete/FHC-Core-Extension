export const docTabulatorOptions = {
	template: `
<div class="row-col mt-5">
<h3 class="h4">Tabulator Options: Basic Example</h3>
<div class="card card-body bg-light mt-3">
<code><pre>
<span class="text-muted">// Basic Example for your Tabulator Options and how to format your columns depending on their data type</span>
tabulatorOptions: {
index: 'id',    	<span class="text-muted">// Important! Tell tabulator the unique id's column field. Use it then with getIndex() method.</span>
maxHeight: "100%",
minHeight: 100,
layout: 'fitColumns',  	<span class="text-muted">// fitColumns (default) squeezes into table width. fitData adds scrollbar if needed.</span>
rowHeight: 60,    	<span class="text-muted">// Condense table size if needed.</span>
placeholder: "Keine Daten vorhanden", <span class="text-muted">// If no data is provided, show this text</span>
columnDefaults:{
  tooltip:true,  	<span class="text-muted">// Use tooltip on your columns to display long text like Anmerkungen / Notizen / etc.</span>
},
columns: [
  {
	formatter: 'rowSelection',
	titleFormatter: 'rowSelection',
	titleFormatterParams: {
	  rowRange: "active" <span class="text-muted">// Only toggle the values of the active filtered rows</span>
	},
	  frozen: true,
	width: 70
  },
  {title: 'ID', field: 'id', headerFilter: true, width: 70, hozAlign: 'right', frozen: true},
  {title: 'Core Data', field: 'coreData', headerFilter: true, frozen: true},
  {title: 'Integer', field: 'number', headerFilter: true, hozAlign: 'right'},
  {title: 'String', field: 'text', headerFilter: true},
  {title: 'Date', field: 'datum', headerFilter: true, hozAlign: 'center'},
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
  {
	title:"Money",
	field:"money",
	formatter:"money",
	formatterParams:{
	  decimal:",",
	  thousand:".",
	  symbol:"€",
	  symbolAfter:true
	}
  },
  {
	title: 'File',
	field: 'datei',
	headerFilter: true,
	formatter:"link",
	formatterParams: (cell) =&gt; { return {
	  labelField:"datei.titel",
	  url: FHC_JS_DATA_STORAGE_OBJECT.app_root +
		FHC_JS_DATA_STORAGE_OBJECT.ci_router +
		"/" +
		FHC_JS_DATA_STORAGE_OBJECT.called_path +
		"/download?dms_id=" + cell.getData().datei.dms_id,
	  target:"_blank"
	  }
	},
	tooltip: (e, cell) =&gt;  cell.getData().datei.titel  // Overwrite table option tooltip, which will return the datei-object
  },
  {title: 'Anmerkung', field: 'anmerkung', headerFilter: true},
  {
	title: 'Liste',
	field: 'liste',
	editor: "list",
	editorParams:{values:['Neu', 'Genehmigt', 'Abgelehnt']},
	headerFilter: true,
	headerFilterParams:{values:['Neu', 'Genehmigt', 'Abgelehnt']},
	frozen: true
  },
  {
	title: 'Aktionen',
	field: 'actions',
	minWidth: 150,  // Ensures Action-buttons will be always fully displayed
	formatter: (cell, formatterParams, onRendered) =&gt; {
	  let container = document.createElement('div');
	  container.className = "d-flex gap-2";

	  let button = document.createElement('button');
	  button.className = 'btn btn-outline-secondary btn-action';
	  button.innerHTML = '...';
	  button.addEventListener('click', () =&gt;
		this.manipulateData(cell.getRow().getIndex())
	  );
	  container.append(button);

	  button = document.createElement('button');
	  button.className = 'btn btn-outline-secondary btn-action';
	  button.innerHTML = '&lt;i class="fa fa-edit"&gt;&lt;/i&gt;';
	  button.addEventListener('click', (event) =&gt;
		this.editData(cell.getRow().getIndex())
	  );
	  container.append(button);

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
</pre></code>
</div>
</div>
`
};
