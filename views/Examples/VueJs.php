<?php
	$includesArray = [
		'title' => 'My Extension - VueJs Examples',
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
			'public/extensions/FHC-Core-Extension/js/apps/Examples.js'
		]
	];
	$this->load->view('templates/FHC-Header', $includesArray);
?>

	<div id="main">
		<div id="nav">
			<core-navigation-cmpt :add-side-menu-entries="menu"></core-navigation-cmpt>
		</div>

		<div id="content" class="align-to-coreNav">
			<header>
				<h1 class="h2 mb-5">VueJs Examples</h1>
			</header>
			
			<main>
				...
			</main>
		</div>
	</div>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

