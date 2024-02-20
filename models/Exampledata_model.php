<?php

class Exampledata_model extends DB_Model
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		parent::__construct();
		$this->dbTable = 'extension.tbl_exampledata';
		$this->pk = 'exampledata_id';
	}

}