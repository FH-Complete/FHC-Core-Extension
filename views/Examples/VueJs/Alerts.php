<?php
	$includesArray = [
		'title' => 'My Extension - VueJs Examples - Alerts',
		'vue3' => true,
		'axios027' => true,
		'bootstrap5' => true,
		'fontawesome6' => true,
		'primevue3' => true,
		'navigationcomponent' => true,
		'filtercomponent' => true,
		'customCSSs' => [
			'public/extensions/FHC-Core-Extension/css/VueJs.css'
		],
		'customJSModules' => [
			// Load Vue Apps
			'public/extensions/FHC-Core-Extension/js/apps/Examples.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Alerts/Basic.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Alerts/Example1.js',
			'public/extensions/FHC-Core-Extension/js/apps/examples/Alerts/Example2.js'
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
				<h1>VueJs Examples<small>Alerts</small></h1>
			</header>
			<aside class="col-lg-3">
				<div id="sidenav" class="list-group sticky-lg-top">
					<a href="#alertplugin" class="list-group-item list-group-item-action">Alert Plugin</a>
					<a href="#alertplugin-enable" class="list-group-item list-group-item-action">- Enable FhcAlert Core Plugin in your App</a>
					<a href="#alertplugin-basic" class="list-group-item list-group-item-action">- Use FhcAlert Plugin from anywhere inside your App</a>
					<a href="#alertplugin-example1" class="list-group-item list-group-item-action">- Example 1</a>
					<a href="#alertplugin-example2" class="list-group-item list-group-item-action">- Example 2</a>
				</div>
			</aside>
			<main class="col-lg-9">
				<h2 class="h3" id="alertplugin">Alert Plugin</h2>
				<p class="lead">
					Use FhcAlert core plugin to popup alerts from anywhere inside your app. <br>
					Use it to display same look&feel <b>success, info, attention and error messages</b> to the user, 
					also to <b>ask user for confirmation</b> before deleting data.
					You can use <b>multiple alerts</b> to create message stacks, e.g. to display multiple notifications.
				</p>

				<!-- Code Documentation -->	
				<h3 class="h4" id="alertplugin-enable">Enable FhcAlert Core Plugin in your App</h3>
				<p>
					FhcAlert core plugin is using 
					<a href="https://primevue.org/toast/" target="_blank">PrimeVue Toast</a> 
					and 
					<a href="https://primevue.org/confirmdialog/" target="_blank">PrimeVue ConfirmDialog</a> 
					Components. They are installed and initialized inside the plugin.<br>
					To use it, import FhcAlert core plugin once into your app, to then use it from anywhere inside your app.
				</p>
				<pre class="border"><code class="language-js"><?= htmlentities(
					'// Import plugin into your app' . "\n" .
					'import FhcAlert from \'../../../../js/plugin/FhcAlert.js\';' . "\n" .
					"\n" .
					'const app = Vue.createApp({' . "\n" .
					'	components: {' . "\n" .
					'		// components' . "\n" .
					'	}' . "\n" .
					'});' . "\n" .
					"\n" .
					'// Use plugin in your app' . "\n" .
					'app' . "\n" .
					'	.use(FhcAlert)' . "\n" .
					'	.mount(\'#main\');'
				); ?></code></pre>

				<h3 class="h4" id="alertplugin-basic">Use FhcAlert Plugin from anywhere inside your App</h3>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Alerts/Basic.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3">
					<div id="example-alert-basic"></div>
				</section>

				<h3 class="h4" id="alertplugin-example1">Example 1: Display Info Alert on Success and handle System Error</h3>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Alerts/Example1.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-alert-example1"></div>
				</section>
				<pre class="border border-bottom-0 mb-0"><code class="language-html"><?= htmlentities(
					'<!-- Button calls function -->' . "\n" .
					'<button class="btn btn-primary" @click="getFullName">Namen anzeigen</button>'
				); ?></code></pre>
				<pre class="border"><code class="language-js"><?= htmlentities(
					'// Function' . "\n" .
					'getFullName() {' . "\n" .
					'	CoreRESTClient' . "\n" .
					'		.get(\'/extensions/FHC-Core-Extension/FhcTemplate/getFullName\')' . "\n" .
					'		.then(result => result.data)' . "\n" .
					'		// Alert on success' . "\n" .
					'		.then(result => {' . "\n" .
					'			this.$fhcAlert.alertInfo(\'Mein Name ist \' + CoreRESTClient.getData(result));' . "\n" .
					'		})' . "\n" .
					'		// Alert on failure' . "\n" .
					'		.catch(this.$fhcAlert.handleSystemError);' . "\n" .
					'}'
				); ?></code></pre>

				<h3 class="h4" id="alertplugin-example2">Example 2: Use Confirm Dialog on Delete. Display Success Alert on Success and handle System Error</h3>
				<div class="d-flex justify-content-between">
					<h6>Example:</h6>
					<a href="#" title="FHC-Core-Extension/public/js/apps/examples/Alerts/Example2.js" data-bs-toggle="tooltip" data-bs-placement="left">
						<i class="fa-solid fa-circle-info"></i>
					</a>
				</div>
				<section class="border p-3 mb-3">
					<div id="example-alert-example2"></div>
				</section>
				<pre class="border border-bottom-0 mb-0"><code class="language-html"><?= htmlentities(
					'<!-- Button calls function -->' . "\n" .
					'<button class="btn btn-danger" @click="deleteData(123)">Datensatz löschen</button>'
				); ?></code></pre>
				<pre class="border"><code class="language-js"><?= htmlentities(
					'// Function. You need async to await the users confirmation' . "\n" .
					'async deleteData(id) {' . "\n" .
					'	// Don\'t forget to await!' . "\n" .
					'	if (await this.$fhcAlert.confirmDelete() === false)' . "\n" .
					'		return;' . "\n" .
					"\n" .
					'	// Confirmed! You can go on...' . "\n" .
					'	CoreRESTClient' . "\n" .
					'		.post(\'/extensions/FHC-Core-Extension/FhcTemplate/deleteData/\' + id)' . "\n" .
					'		// Alert on success' . "\n" .
					'		.then(result => {' . "\n" .
					'			this.$fhcAlert.alertSuccess(\'Datensatz \' + CoreRESTClient.getData(result.data) + \' gelöscht!\');' . "\n" .
					'		})' . "\n" .
					'		// Alert on failure' . "\n" .
					'		.catch(this.$fhcAlert.handleSystemError);' . "\n" .
					'}'
				); ?></code></pre>

				<!-- TODO(chris): then() version and then() chaining -->

			</main>
		</div>
	</div>

	<style type="text/css">
		@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css");
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
	<script>hljs.highlightAll();</script>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>
