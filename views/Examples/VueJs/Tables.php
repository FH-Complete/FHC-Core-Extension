<?php
	$includesArray = [
		'title' => 'My Extension - VueJs Examples - Tables',
		'vue3' => true,
		'axios027' => true,
		'bootstrap5' => true,
		'fontawesome6' => true,
		'primevue3' => true,
		'tabulator5' => true,
		'navigationcomponent' => true,
		'filtercomponent' => true,
		'customCSSs' => [
			'public/extensions/FHC-Core-Extension/css/VueJs.css'
		],
		'customJSModules' => [
			// Load Vue Apps
			'public/extensions/FHC-Core-Extension/js/apps/Examples.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Tables/Basic.js'
		]
	];
	$this->load->view('templates/FHC-Header', $includesArray);
?>

	<div id="main">
		<div id="nav">
			<core-navigation-cmpt></core-navigation-cmpt>
		</div>

		<div id="content" class="row flex-row-reverse">
			<header class="fhc-header">
				<h1>VueJs Examples<small>Tables</small></h1>
			</header>
			<aside class="col-lg-3">
				<div id="sidenav" class="list-group sticky-lg-top">
					<a href="#table" class="list-group-item list-group-item-action">Tabulator without Filter (table-only)</a>
					<a href="#table-structure" class="list-group-item list-group-item-action">- Basic structure</a>
					<a href="#table-options" class="list-group-item list-group-item-action">- Tabulator Options</a>
				</div>
			</aside>
			<main class="col-lg-9">
				<h2 class="h3" id="table">Tabulator without Filter (table-only)</h2>
				<p class="lead">
					Tabulator without Filter will render your table with the select columns functionality ( <i class="fa fa-table-columns"></i> )  by default.<br>
					You can easily add an Add-Button, Refresh-Button and Action-Buttons to handle multiple rows at once. Column formatters are used to keep same look&feel.
				</p>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Tables/Basic.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3">
					<div id="example-tables-basic"></div>
				</section>

				<h3 class="h4 mt-5" id="table-structure">Basic structure: Table-only Tabulator</h3>
				<pre class="border"><code class="language-js"><?= htmlentities(
					'// Import the Core Filter- and Core RESTClient Component to build your table and handle data' . "\n" .
					'import {CoreFilterCmpt} from \'../../../../../js/components/filter/Filter.js\';' . "\n" .
					'import {CoreRESTClient} from \'../../../../../../public/js/RESTClient.js\';' . "\n" .
					"\n" .
					'export default {' . "\n" .
					'	components: {' . "\n" .
					'		CoreFilterCmpt' . "\n" .
					'	},' . "\n" .
					'	methods: {' . "\n" .
					'		setInitTableData() {' . "\n" .
					'			CoreRESTClient' . "\n" .
					'				.get(\'/extensions/FHC-Core-Extension/FhcTemplate/getTestData\')' . "\n" .
					'				.then(result => result.data)' . "\n" .
					'				.then(result => { this.$refs.myTabulator.tabulator.setData(CoreRESTClient.getData(result))} )' . "\n" .
					'				.catch(this.$fhcAlert.handleSystemError);' . "\n" .
					'		}' . "\n" .
					'	},' . "\n" .
					'	data() {' . "\n" .
					'		return {' . "\n" .
					'			// See below the tabulator options and columns example' . "\n" .
					'			tabulatorOptions: { ... }' . "\n" .
					'		};' . "\n" .
					'	},' . "\n" .
					'	// On mounted: Set initial table data' . "\n" .
					'	mounted() {' . "\n" .
					'		// Be sure the table was built before setting data' . "\n" .
					'		this.$refs.myTabulator.tabulator.on(\'tableBuilt\', (e, row) => {' . "\n" .
					'			this.setInitTableData();' . "\n" .
					'		}' . "\n" .
					'	},' . "\n" .
					'	// Tabulator (table-only)' . "\n" .
					'	template: `' . "\n" .
					'		<core-filter-cmpt' . "\n" .
					'			ref="myTabulator"' . "\n" .
					'			table-only' . "\n" .
					'			:side-menu="false"' . "\n" .
					'			:tabulator-options="tabulatorOptions"' . "\n" .
					'			>' . "\n" .
					'		</core-filter-cmpt>`' . "\n" .

					'};'
				); ?></code></pre>

				<h3 class="h4 mt-5" id="table-options">Tabulator Options: Basic Example</h3>
				<pre class="border"><code class="language-js"><?= htmlentities(
					'// Basic Example for your Tabulator Options and how to format your columns depending on their data type' . "\n" .
					'tabulatorOptions: {' . "\n" .
					'	index: \'id\',							// Important! Tell tabulator the unique id\'s column field. Use it then with getIndex() method.' . "\n" .
					'	maxHeight: "100%",' . "\n" .
					'	minHeight: 100,' . "\n" .
					'	layout: \'fitColumns\',					// fitColumns (default) squeezes into table width. fitData adds scrollbar if needed.' . "\n" .
					'	rowHeight: 60,							// Condense table size if needed.' . "\n" .
					'	placeholder: "Keine Daten vorhanden",		// If no data is provided, show this text' . "\n" .
					'	columnDefaults: {' . "\n" .
					'		tooltip: true,						// Use tooltip on your columns to display long text like Anmerkungen / Notizen / etc.' . "\n" .
					'	},' . "\n" .
					'	columns: [' . "\n" .
					'		{' . "\n" .
					'			formatter: \'rowSelection\',' . "\n" .
					'			titleFormatter: \'rowSelection\',' . "\n" .
					'			titleFormatterParams: {' . "\n" .
					'				rowRange: "active"			// Only toggle the values of the active filtered rows' . "\n" .
					'			},' . "\n" .
					'			frozen: true,' . "\n" .
					'			width: 70' . "\n" .
					'		},' . "\n" .
					'		{title: \'ID\', field: \'id\', headerFilter: true, width: 70, hozAlign: \'right\', frozen: true},' . "\n" .
					'		{title: \'Core Data\', field: \'coreData\', headerFilter: true, frozen: true},' . "\n" .
					'		{title: \'Integer\', field: \'number\', headerFilter: true, hozAlign: \'right\'},' . "\n" .
					'		{title: \'String\', field: \'text\', headerFilter: true},' . "\n" .
					'		{title: \'Date\', field: \'datum\', headerFilter: true, hozAlign: \'center\'},' . "\n" .
					'		{' . "\n" .
					'			title: \'Boolean\',' . "\n" .
					'			field: \'bool\',' . "\n" .
					'			formatter: "tickCross",' . "\n" .
					'			headerFilter: "tickCross",' . "\n" .
					'			headerFilterParams: {"tristate": true},' . "\n" .
					'			hozAlign: "center",' . "\n" .
					'			formatterParams: {' . "\n" .
					'				tickElement: \'<i class="fa fa-check text-success"></i>\',' . "\n" .
					'				crossElement: \'<i class="fa fa-xmark text-danger"></i>\'' . "\n" .
					'			}' . "\n" .
					'		},' . "\n" .
					'		{' . "\n" .
					'			title: "Money",' . "\n" .
					'			field: "money",' . "\n" .
					'			formatter: "money",' . "\n" .
					'			formatterParams: {' . "\n" .
					'				decimal: ",",' . "\n" .
					'				thousand: ".",' . "\n" .
					'				symbol: "€",' . "\n" .
					'				symbolAfter: true' . "\n" .
					'			}' . "\n" .
					'		},' . "\n" .
					'		{' . "\n" .
					'			title: \'File\',' . "\n" .
					'			field: \'datei\',' . "\n" .
					'			headerFilter: true,' . "\n" .
					'			formatter: "link",' . "\n" .
					'			formatterParams: cell => {' . "\n" .
					'				return {' . "\n" .
					'					labelField: "datei.titel",' . "\n" .
					'					url: FHC_JS_DATA_STORAGE_OBJECT.app_root +' . "\n" .
					'						FHC_JS_DATA_STORAGE_OBJECT.ci_router +' . "\n" .
					'						"/" +' . "\n" .
					'						FHC_JS_DATA_STORAGE_OBJECT.called_path +' . "\n" .
					'						"/download?dms_id=" +' . "\n" .
					'						cell.getData().datei.dms_id,' . "\n" .
					'					target: "_blank"' . "\n" .
					'				}' . "\n" .
					'			},' . "\n" .
					'			tooltip: (e, cell) => cell.getData().datei.titel  // Overwrite table option tooltip, which will return the datei-object' . "\n" .
					'		},' . "\n" .
					'		{title: \'Anmerkung\', field: \'anmerkung\', headerFilter: true},' . "\n" .
					'		{' . "\n" .
					'			title: \'Liste\',' . "\n" .
					'			field: \'liste\',' . "\n" .
					'			editor: "list",' . "\n" .
					'			editorParams: {values: [\'Neu\', \'Genehmigt\', \'Abgelehnt\']},' . "\n" .
					'			headerFilter: true,' . "\n" .
					'			headerFilterParams: {values: [\'Neu\', \'Genehmigt\', \'Abgelehnt\']},' . "\n" .
					'			frozen: true' . "\n" .
					'		},' . "\n" .
					'		{' . "\n" .
					'			title: \'Aktionen\',' . "\n" .
					'			field: \'actions\',' . "\n" .
					'			minWidth: 150,  // Ensures Action-buttons will be always fully displayed' . "\n" .
					'			formatter: (cell, formatterParams, onRendered) => {' . "\n" .
					'				let container = document.createElement(\'div\');' . "\n" .
					'				container.className = "d-flex gap-2";' . "\n" .
					"\n" .
					'				let button = document.createElement(\'button\');' . "\n" .
					'				button.className = \'btn btn-outline-secondary btn-action\';' . "\n" .
					'				button.innerHTML = \'...\';' . "\n" .
					'				button.addEventListener(' . "\n" .
					'					\'click\',' . "\n" .
					'					() => this.manipulateData(cell.getRow().getIndex())' . "\n" .
					'				);' . "\n" .
					'				container.append(button);' . "\n" .
					"\n" .
					'				button = document.createElement(\'button\');' . "\n" .
					'				button.className = \'btn btn-outline-secondary btn-action\';' . "\n" .
					'				button.innerHTML = \'<i class="fa fa-edit"></i>\';' . "\n" .
					'				button.addEventListener(' . "\n" .
					'					\'click\',' . "\n" .
					'					event => this.editData(cell.getRow().getIndex())' . "\n" .
					'				);' . "\n" .
					'				container.append(button);' . "\n" .
					"\n" .
					'				button = document.createElement(\'button\');' . "\n" .
					'				button.className = \'btn btn-outline-secondary btn-action\';' . "\n" .
					'				button.innerHTML = \'<i class="fa fa-xmark"></i>\';' . "\n" .
					'				button.addEventListener(' . "\n" .
					'					\'click\',' . "\n" .
					'					() => this.deleteData(cell.getRow().getIndex())' . "\n" .
					'				);' . "\n" .
					'				container.append(button);' . "\n" .
					"\n" .
					'				return container;' . "\n" .
					'			},' . "\n" .
					'			frozen: true' . "\n" .
					'		}' . "\n" .
					'	]' . "\n" .
					'}'
				); ?></code></pre>
			</main>
		</div>
	</div>

	<style type="text/css">
		@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css");
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
	<script>hljs.highlightAll();</script>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>
