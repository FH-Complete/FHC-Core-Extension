<?php
// Add Header-Menu-Entry to all Pages
$config['navigation_header']['*']['FhcTemplate'] = array(
		'link' => site_url('extensions/FHC-Core-Extension/FhcTemplate'),
		'icon' => '',
		'description' => 'FhcTemplate',
		'sort' => 1
	);

// Add Header-Menu-Entry to Extension Page with DropDown
$config['navigation_header']['extensions/FHC-Core-Extension/FhcTemplate/index'] = array(
		'FHC-Core-Extension-Advanced-Menu' => array(
		'link' => '#',
		'icon' => '',
		'description' => 'FHC Template',
		'sort' => 10,
		'children'=> array(
			'sub1' => array(
				'link' => site_url(),
				'icon' => '',
				'description' => 'Submenu 1',
				'expand' => true,
				'sort' => 1,
				'requiredPermissions' => 'basis/vilesci:r'
			),
			'sub2' => array(
				'link' => site_url(),
				'icon' => 'cubes',
				'description' => 'Submenu 2',
				'expand' => true,
				'sort' => 2,
				'requiredPermissions' => 'admin:r'
			)
		)
	));

// Add Side-Menu-Entry to Main Page
$config['navigation_menu']['Vilesci/index']['administration']['children']['FhcTemplate'] = array(
		'link' => site_url('extensions/FHC-Core-Extension/FhcTemplate'),
		'icon' => 'cubes',
		'description' => 'FHC Example Template',
		'expand' => true
);

// Add Side-Menu-Entry to Extension Page
$config['navigation_menu']['extensions/FHC-Core-Extension/FhcTemplate/index'] = array(
	'Back' => array(
		'link' => site_url(),
		'description' => 'Zurück',
		'icon' => 'angle-left'
	),
	'Dashboard' => array(
		'link' => '#',
		'description' => 'Dashboard',
		'icon' => 'dashboard'
	)
);
