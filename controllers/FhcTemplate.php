<?php

if (! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Main FHC Template
 */
class FhcTemplate extends Auth_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct(
			array(
				'index' => 'admin:rw'
			)
		);
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Public methods

	public function index()
	{
		$this->load->view('extensions/FHC-Core-Extension/FhcTemplate.php');
	}
}