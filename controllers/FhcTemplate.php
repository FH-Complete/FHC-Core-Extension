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
				'getAnrechnungen' => 'admin:rw',
				'getAnrechnungstatusList' => 'admin:rw',
				'getTestData' => 'admin:rw'
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

	public function getTestData()
	{
		// Pseudo success object mit retval
		$this->outputJsonSuccess(array(
			array(
				'id'=> 1,
				'coreData'=> 'Person A',
				'number'=> 10,
				'text'=> 'Test String',
				'datum'=> '2024-01-01',
				'money'=> 3000.50,
				'bool'=> true,
				'dms_id' => 1,
				'dokument_bezeichnung' => 'A Datei.pdf',
				'anmerkung'=> 'Langer Text kann mit tooltip gelesen werden. Langer Text kann mit tooltip gelesen werden',
				'liste'=> 'Neu'
			),
			array(
				'id'=> 2,
				'coreData'=> 'Person A',
				'number'=> 10,
				'text'=> 'Test String',
				'datum'=> '2024-01-02',
				'money'=> 3000.50,
				'bool'=> false,
				'dms_id' => 2,
				'dokument_bezeichnung' => 'B Datei.pdf',
				'anmerkung'=> 'Langer Text kann mit tooltip gelesen werden',
				'liste'=> 'Genehmigt'
			),
			array(
				'id'=> 3,
				'coreData'=> 'Person A',
				'number'=> 10,
				'text'=> 'Test String',
				'datum'=> '2024-01-03',
				'money'=> 3000.50,
				'bool'=> true,
				'dms_id' => 3,
				'dokument_bezeichnung' => 'C Datei.pdf',
				'anmerkung'=> 'Langer Text kann mit tooltip gelesen werden',
				'liste'=> 'Abgelehnt'
			),
			array(
				'id'=> 4,
				'coreData'=> 'Person A',
				'number'=> 10,
				'text'=> 'Test String',
				'datum'=> '2024-01-01',
				'money'=> 3000.50,
				'bool'=> true,
				'dms_id' => 4,
				'dokument_bezeichnung' => 'D Datei.pdf',
				'anmerkung'=> 'Langer Text kann mit tooltip gelesen werden',
				'liste'=> 'Neu'
			),
			array(
				'id'=> 5,
				'coreData'=> 'Person B',
				'number'=> 10,
				'text'=> 'Test String',
				'datum'=> '2024-01-02',
				'money'=> 3000.50,
				'bool'=> false,
				'dms_id' => 5,
				'dokument_bezeichnung' => 'E Datei.pdf',
				'anmerkung'=> 'Langer Text kann mit tooltip gelesen werden',
				'liste'=> 'Genehmigt'
			),
		));
	}

	public function getAnrechnungen()
	{
		// Get Anrechnungen
		$this->load->model('education/Anrechnung_model', 'AnrechnungModel');
		//$this->AnrechnungModel->addSelect('anrechnung_id', 'DESC');
		$this->AnrechnungModel->addOrder('insertamum', 'DESC');
		$this->AnrechnungModel->addLimit(100);
		$result = $this->AnrechnungModel->load();

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
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