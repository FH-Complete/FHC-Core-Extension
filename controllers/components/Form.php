<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class Form extends FHCAPI_Controller
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct([
			'postExample' => 'admin:r', // TODO(chris): permissions
			'modal' => 'admin:r',
			'full' => 'admin:r'
		]);
	}
		
	/**
	 * Post Example
	 * @see FHC-Core-Extension/public/js/apps/examples/Form/Form.js
	 * @return void
	 */
	public function postExample()
	{
		// Load the library
		$this->load->library('form_validation');

		// Set up the validation rules
		$this->form_validation->set_rules('myinput1', 'Input 1', 'required');
		$this->form_validation->set_rules('myinput2', 'Input 2', 'required');

		// Run the validation
		if ($this->form_validation->run() == false) {
			// Terminate on errors
			$this->terminateWithValidationErrors($this->form_validation->error_array());
		}
		
		// Return success
		if ($this->input->post('myinput1') == $this->input->post('myinput2'))
			$this->terminateWithSuccess('Success .. and both values are equal');
		$this->terminateWithSuccess('Success ... but the values are not equal');
	}

	/**
	 * Modal
	 * @see FHC-Core-Extension/public/js/apps/examples/Form/Modal.js
	 * @return void
	 */
	public function modal()
	{
		// Load the library
		$this->load->library('form_validation');

		// Set up the validation rules
		$this->form_validation->set_rules('value1', 'Input', 'required');

		// Run the validation
		if ($this->form_validation->run() == false) {
			// Terminate on errors
			$this->terminateWithValidationErrors($this->form_validation->error_array());
		}
		
		// Return success
		$this->terminateWithSuccess($this->input->post('value1'));
	}

	/**
	 * Full Example
	 * @see FHC-Core-Extension/public/js/apps/examples/Form/Full.js
	 * @return void
	 */
	public function full()
	{
		// Load the library
		$this->load->library('form_validation');

		// Provide some error messages
		$this->form_validation->set_message([
			'minlength' => "The {field} field should have at least {param} characters.",
			'maxlength' => "The {field} field should not be longer than {param} characters."
		]);
		
		// Set up the validation rules
		$this->form_validation->set_rules(
			'mystring',
			'MyString',
			'required|regex_match[/^[^a]*$/]',
			[
				// Overwrite the error message for this rule
				'regex_match' => "The {field} field should not contain an 'a'"
			]
		);
		$this->form_validation->set_rules('mypassword', 'MyPassword', 'required|minlength[3]');
		$this->form_validation->set_rules('mynumber', 'MyNumber', 'integer|less_than[10]');
		$this->form_validation->set_rules('mytext', 'MyText', 'maxlength[10]');
		$this->form_validation->set_rules('myselect', 'MySelect', 'required');
		$this->form_validation->set_rules('mysinglechoice', 'MySingleChoice', 'in_list[yes,maybe]');
		$this->form_validation->set_rules(
			'mymultiplechoice',
			'MyMultipleChoice',
			[
				// Use a callable for custom validation
				[
					'atleasttwo_callable',
					function () {
						/** NOTE(chris):
						 * in CI < 3.2: the value will be set to null if it
						 * is an array so we have to use $this->input->post
						 * here.
						 * @see https://github.com/bcit-ci/CodeIgniter/issues/193
						 */
						return count($this->input->post('mymultiplechoice')) > 1;
					}
				]
			],
			[
				'atleasttwo_callable' => "Please select at least two options for the {field} field."
			]
		);

		// Run the validation
		if ($this->form_validation->run() == false) {
			// Terminate on errors
			$this->terminateWithValidationErrors($this->form_validation->error_array());
		}

		// Return success
		$this->terminateWithSuccess();
	}
}

