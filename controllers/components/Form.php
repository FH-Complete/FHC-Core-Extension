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
			'index' => 'admin:r', // TODO(chris): permissions
			'form1' => 'admin:r'
		]);
	}
		
	/**
	 * Index Controller
	 * @return void
	 */
	public function index()
	{
		$this->terminateWithValidationErrors(['test' => 'msg']);
		$this->setData([
			'$_POST' => $_POST,
			'$_GET' => $_GET,
			'$_FILES' => $_FILES . FAL,
		]);
		#trigger_error('$message', E_USER_ERROR);
		$this->load->model('person/Person_model', 'PersonModel');
		/*$this->PersonModel->addSelect('testy');
		$res = $this->PersonModel->load(1);
		if (isError($res))
			$this->addError(getError($res), self::ERROR_TYPE_DB);*/

		/*$this->PersonModel->insert([
			'ersatzkennzeichen' => '0016173190'
		]);*/
		#show_404();
		#show_error(['test','testy']);
		#var_dump('test');
		#$this->terminateWithValidationErrors(['test' => 'Test Error Message']);
	}

	public function form1()
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
	
	public function test()
	{
		$test = FALS;
	}
}

