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
			'tabulatorOnly' => 'admin:rw',
			'tabulatorFilter' => 'admin:rw',
			'myExtension' => 'admin:rw',
			'icons' => 'admin:rw',
			'vuejs' => 'admin:rw',
			'getExampledata' => 'admin:rw',
			'getExamplestatusList' => 'admin:rw',
			'updateExamplestatus' => 'admin:rw',
			'deleteExampledata' => 'admin:rw',
			'getActualDate' => 'admin:rw',
			'deleteData' => 'admin:rw'
		]);

		$this->load->model('extensions/FHC-Core-Extension/Exampledata_model', 'ExampledataModel');
		$this->load->model('extensions/FHC-Core-Extension/Examplestatus_model', 'ExamplestatusModel');
	}

	/**
	 * Index Controller
	 * @return void
	 */
	public function index()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/BaseLayout');
	}

	public function tabulatorOnly()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/TabulatorOnly');
	}

	public function tabulatorFilter()
	{
		$this->load->view('extensions/FHC-Core-Extension/Examples/TabulatorFilter');
	}

	public function myExtension()
	{
		$this->load->view('extensions/FHC-Core-Extension/MyExtension');
	}

	public function icons()
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

	public function getExampledata()
	{
		// Get Exampledata
		$this->ExampledataModel->addSelect('
			exampledata_id, 
			uid, stringval,
			integerval,
			dateval,
			booleanval, 
			moneyval,
			dokument_bezeichnung,
			dms_id,
			textval, 
			examplestatus_kurzbz,
			bezeichnung[(' . $this->_getLanguageIndex() . ')]');
		$this->ExampledataModel->addJoin('extension.tbl_examplestatus', 'examplestatus_kurzbz');
		$this->ExampledataModel->addOrder('exampledata_id');
		$result = $this->ExampledataModel->load();

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function getExamplestatusList()
	{
		// Get all Examplestatus
		$this->ExamplestatusModel->addSelect('examplestatus_kurzbz, bezeichnung[(' . $this->_getLanguageIndex() . ')]');
		$result = $this->ExamplestatusModel->load();

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function updateExamplestatus()
	{
		$data = $this->getPostJson();

		$result = $this->ExampledataModel->update(
			$data->exampledata_id,
			array('examplestatus_kurzbz' => $data->examplestatus_kurzbz)
		);

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function deleteExampledata(){
		$data = $this->getPostJson();

		$result = $this->ExampledataModel->delete($data->exampledata_id);

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function getActualDate()
	{
		$this->outputJsonSuccess(date('d.m.Y'));
	}

	public function deleteData($id)
	{
		// Pseudo success object mit retval
		$this->outputJsonSuccess($id);
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

