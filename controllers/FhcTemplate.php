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
				'index' => 'admin:rw',
				'getFullName' => 'admin:rw',
				'deleteData' => 'admin:rw',
				'getAnrechnungstatusList' => 'admin:rw'
			)
		);
	}


	// -----------------------------------------------------------------------------------------------------------------
	// Public methods

	public function index()
	{
		$this->load->view('extensions/FHC-Core-Extension/FhcTemplate.php');
	}

	public function getFullName()
	{
		$this->load->model('person/Person_model', 'PersonModel');
		$result = $this->PersonModel->getFullName(getAuthUID());

		if (isError($result))
		{
			$this->terminateWithJsonError(getError($result));
		}

		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function deleteData($id)
	{
		// Pseudo success object mit retval
		$this->outputJsonSuccess($id);
	}

	public function getAnrechnungstatusList()
	{
		// Get all Anrechnungsstatus
		$this->load->model('education/Anrechnungstatus_model', 'AnrechnungstatusModel');
		$this->AnrechnungstatusModel->addSelect('bezeichnung_mehrsprachig[(' . $this->_getLanguageIndex() . ')]');
		$result = $this->AnrechnungstatusModel->load();

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	private function _getLanguageIndex()
	{
		$this->load->model('system/Sprache_model', 'SpracheModel');
		$this->SpracheModel->addSelect('index');
		$result = $this->SpracheModel->loadWhere(array('sprache' => getUserLanguage()));

		// Return language index
		return hasData($result) ? getData($result)[0]->index : 1;
	}
}