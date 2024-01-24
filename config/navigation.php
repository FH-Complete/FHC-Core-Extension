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
	)
);
