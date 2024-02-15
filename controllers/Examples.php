<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class Examples extends Auth_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct([
			'index' => 'admin:rw',
			'viewTabulatorOnly' => 'admin:rw',
			'viewTabulatorFilter' => 'admin:rw',
			'viewExampleTabulatorOnly' => 'admin:rw',
			'viewExampleTabulatorFilter' => 'admin:rw',
			'viewIcons' => 'admin:rw',
			'vuejs' => 'admin:rw'
		]);
	}

	/**
	 * Index Controller
	 * @return void
	 */
	public function index()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/BaseLayout');
	}

	public function viewTabulatorOnly()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/TabulatorOnly');
	}

	public function viewTabulatorFilter()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/TabulatorFilter');
	}

	public function viewExampleTabulatorOnly()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/ExampleTabulatorOnly');
	}

	public function viewExampleTabulatorFilter()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/ExampleTabulatorFilter');
	}

	public function viewIcons()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/Icons');
	}

	/**
	 * VueJS Examples
	 * @param string			$example (optional)
	 * @return void
	 */
	public function vuejs($example = null)
	{
		$example = $example ? '/' . ucfirst($example) : '';
		$this->load->view('extensions/FHC-Core-Extension/Examples/VueJs' . $example);
	}
}

