<?php
// Add Header-Menu-Entry to Main Page
$config['navigation_header']['Vilesci/index']['MyExtension'] = base_url('index.ci.php/extensions/FHC-Core-Extension/MyExtension');

// Add Header-Menu-Entry to Extension Page
$config['navigation_header']['extensions/FHC-Core-Extension/MyExtension/index']['FHComplete'] = base_url('index.ci.php');

// Add Menu-Entry to Main Page
$config['navigation_menu']['Vilesci/index']['Administration']['children']['MyExtension'] = array(
		'link' => base_url('index.ci.php/extensions/FHC-Core-Extension/MyExtension'),
		'icon' => 'cubes',
		'description' => 'My Extension',
		'expand' => true
);

// Add Menu-Entry to Extension Page
$config['navigation_menu']['extensions/FHC-Core-Extension/MyExtension/index'] = array(
	'Dashboard' => array(
		'link' => '#',
		'description' => 'Dashboard',
		'icon' => 'dashboard'
	)
);

