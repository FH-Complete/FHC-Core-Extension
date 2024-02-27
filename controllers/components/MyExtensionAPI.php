<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class MyExtensionAPI extends FHCAPI_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct([
			'saveExampledata' => 'admin:rw',
		]);

		$this->load->model('extensions/FHC-Core-Extension/Exampledata_model', 'ExampledataModel');
		$this->load->model('extensions/FHC-Core-Extension/Examplestatus_model', 'ExamplestatusModel');
	}

	public function saveExampledata(){
		$this->_postValidation();

		if (is_null($this->input->post('exampledata_id')))
		{
			$result = $this->ExampledataModel->insert($this->input->post());
		}
		else
		{
			$result = $this->ExampledataModel->update($this->input->post('exampledata_id'), $this->input->post());
		}

		// On error
		if (isError($result)) $this->terminateWithError(getError($result), FHCAPI_Controller::ERROR_TYPE_DB);

		// On success
		$this->terminateWithSuccess(hasData($result) ? getData($result) : 0);
	}

	private function _postValidation()
	{
		// Load the library
		$this->load->library('form_validation');

		// Set up the validation rules
		$this->form_validation->set_rules('uid', 'UID', 'required');
		$this->form_validation->set_rules('examplestatus_kurzbz', 'Liste', 'required');

		// Run the validation
		if ($this->form_validation->run() == false) {
			// Terminate on errors
			$this->terminateWithValidationErrors($this->form_validation->error_array());
		}
	}
}

