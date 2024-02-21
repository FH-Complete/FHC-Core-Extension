<?php
// Add Header-Menu-Entry to all Pages
$config['navigation_header']['*']['FhcTemplate'] = array(
		'link' => site_url('extensions/FHC-Core-Extension/examples'),
		'icon' => '',
		'description' => 'FhcTemplate',
		'sort' => 100
	);

// Add Header-Menu-Entry to Extension Page with DropDown
$config['navigation_header']['extensions/FHC-Core-Extension/examples'] = array(
		'FHC-Core-Extension-Advanced-Menu' => array(
		'link' => '#',
		'icon' => '',
		'description' => 'FHC Template',
		'sort' => 100
	));

// Add Side-Menu-Entry to Extension Page
$config['navigation_menu']['extensions/FHC-Core-Extension/examples/*'] = [
	'layout' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples'),
		'description' => 'Base Layout',
		'icon' => ''
	],
	'tabulator' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/tabulatorOnly'),
		'description' => 'Tabulator',
		'icon' => ''
	],
	'tabulatorFilter' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/tabulatorFilter'),
		'description' => 'Tabulator mit Filter',
		'icon' => ''
	],
	'alerts' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/vuejs/alerts'),
		'description' => 'Alerts',
		'icon' => 'brands fa-vuejs',
	],
	'phrases' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/vuejs/phrases'),
		'description' => 'Phrases',
		'icon' => 'brands fa-vuejs',
	],
	'forms' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/vuejs/forms'),
		'description' => 'Forms',
		'icon' => 'brands fa-vuejs',
	],
	'icons' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/icons'),
		'description' => 'Icons',
		'icon' => 'fa-brands fa-font-awesome',
	],
	'myExtension' => [
		'link' => site_url('extensions/FHC-Core-Extension/examples/myExtension'),
		'description' => 'Full Template Example',
		'icon' => ''
	],
];