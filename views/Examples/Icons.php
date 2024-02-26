<?php
$includesArray = array(
	'title' => 'Icons',
	'vue3' => true,
	'axios027' => true,
	'bootstrap5' => true,
	'tabulator5' => true,
	'fontawesome6' => true,
	'primevue3' => true,
	'navigationcomponent' => true,
	'filtercomponent' => true,
	'customJSModules' => array('public/extensions/FHC-Core-Extension/js/apps/Examples2.js'),
	'customCSSs' => array('public/extensions/FHC-Core-Extension/css/FhcMain.css')

);

$this->load->view('templates/FHC-Header', $includesArray);
?>

<div id="main">
	<icons></icons>
</div>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

