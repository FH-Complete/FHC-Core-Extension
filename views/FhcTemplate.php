<?php
$includesArray = array(
	'title' => 'FHC Template',
	'vue3' => true,
	'axios027' => true,
	'bootstrap5' => true,
	'tabulator5' => true,
	'fontawesome6' => true,
	'primevue3' => true,
	'navigationcomponent' => true,
	'filtercomponent' => true,
	'customJSModules' => array('public/extensions/FHC-Core-Extension/js/apps/App.js'),
	'customCSSs' => array('public/extensions/FHC-Core-Extension/css/FhcMain.css')

);

$this->load->view('templates/FHC-Header', $includesArray);
?>

<div id="main">
	<fhc-template></fhc-template>
</div>

<?php $this->load->view('templates/FHC-Footer', $includesArray); ?>

