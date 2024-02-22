<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class MyExtension extends Auth_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct([
			'index' => 'admin:rw',
			'getExampledata' => 'admin:rw',
			'getExamplestatusList' => 'admin:rw',
			'updateExamplestatus' => 'admin:rw',
			'deleteExampledata' => 'admin:rw',
			'addExampledata' => 'admin:rw',
			'editExampledata' => 'admin:rw',
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
		$this->load->view('extensions/FHC-Core-Extension/MyExtension');
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

	public function addExampledata(){
		$data = $this->getPostJson();

		$result = $this->ExampledataModel->insert(array(
				'uid' => $data->uid,
				'stringval' => $data->stringval,
				'integerval' => $data->integerval,
				'textval' => $data->textval,
				'examplestatus_kurzbz' => $data->examplestatus_kurzbz,
				'booleanval' => $data->booleanval,
			)
		);

		// On error
		if (isError($result)) $this->terminateWithJsonError(getError($result));

		// On success
		$this->outputJsonSuccess(hasData($result) ? getData($result) : []);
	}

	public function editExampledata(){
		$data = $this->getPostJson();
		echo "<pre>"; print_r($data); echo "</pre>";

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

