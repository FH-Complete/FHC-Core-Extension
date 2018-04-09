<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class MyExtension extends FHC_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Index Controller
	 * @return void
	 */
	public function index()
	{
		$this->load->library('WidgetLib');
		$this->load->view('extensions/FHC-Core-Extension/MyExtension');
	}
}

