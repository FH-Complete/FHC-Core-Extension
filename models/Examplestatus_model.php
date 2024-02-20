<?php

class Examplestatus_model extends DB_Model
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct();
		$this->dbTable = 'extension.tbl_examplestatus';
		$this->pk = 'examplestatus_kurzbz';
	}

}