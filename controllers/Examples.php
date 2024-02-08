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
			'vuejs' => 'admin:rw'
		]);
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

