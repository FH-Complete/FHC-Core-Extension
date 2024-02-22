<?php
$includesArray = array(
	'title' => 'My Extension',
	'vue3' => true,
	'axios027' => true,
	'bootstrap5' => true,
	'tabulator5' => true,
	'fontawesome6' => true,
	'primevue3' => true,
	'navigationcomponent' => true,
	'filtercomponent' => true,
	'customJSModules' => array('public/extensions/FHC-Core-Extension/js/apps/MyExtension.js'),
	'customCSSs' => array(
        'public/extensions/FHC-Core-Extension/css/FhcMain.css',
	    'public/css/components/vue-datepicker.css',
        'public/css/components/primevue.css'
	)
);

$this->load->view('templates/FHC-Header', $includesArray);
?>

<div id="main">
	<my-extension></my-extension>
</div>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

