<?php
// Add Header-Menu-Entry to all Pages
$config['navigation_header']['*']['FhcTemplate'] = array(
		'link' => site_url('extensions/FHC-Core-Extension/FhcTemplate'),
		'icon' => '',
		'description' => 'FhcTemplate',
		'sort' => 100
	);

// Add Header-Menu-Entry to Extension Page with DropDown
$config['navigation_header']['extensions/FHC-Core-Extension/FhcTemplate/index'] = array(
		'FHC-Core-Extension-Advanced-Menu' => array(
		'link' => '#',
		'icon' => '',
		'description' => 'FHC Template',
		'sort' => 100
	));

// Add Side-Menu-Entry to Extension Page
$config['navigation_menu']['extensions/FHC-Core-Extension/FhcTemplate/index'] = array(
	'Back' => array(
		'link' => site_url(),
		'description' => 'Zurück',
		'icon' => 'angle-left'
	),
	'FHC Template' => array(
		'link' => site_url('extensions/FHC-Core-Extension/FhcTemplate'),
		'description' => 'FHC Template',
		'icon' => ''
	),
//	'Example1' => array(
//		'link' => site_url('extensions/FHC-Core-Extension/templates/Tmplt'),
//		'description' => 'Base Template',
//		'icon' => ''
//	),
//	'Example2' => array(
//		'link' => site_url('extensions/FHC-Core-Extension/templates/TmpltSidecol'),
//		'description' => 'Base Template + Side Column',
//		'icon' => ''
//	),
//	'Example3' => array(
//		'link' => site_url('extensions/FHC-Core-Extension/templates/TmpltNavtabs'),
//		'description' => 'Base Template + NavTabs',
//		'icon' => ''
//	),
//	'Example4' => array(
//		'link' => site_url('extensions/FHC-Core-Extension/templates/TmpltVerticalsplit'),
//		'description' => 'Base Template + Vertical Split',
//		'icon' => ''
//	),
);

// Add Side-Menu-Entry to Extension Page
$config['navigation_menu']['extensions/FHC-Core-Extension/examples/*'] = [
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
];