<?php
$filterCmptArray = array(
	'app' => 'fhctemplate',
	'datasetName' => 'exampledata',
	'query' => '
		SELECT 
			exampledata_id, 
			uid,
			stringval,
			integerval,
			dateval,
			booleanval, 
			moneyval,
			dokument_bezeichnung,
			dms_id,
			textval, 
			examplestatus_kurzbz,
			bezeichnung[1] -- TODO dynamisch einholen
		FROM 
			extension.tbl_exampledata
		JOIN
			extension.tbl_examplestatus USING (examplestatus_kurzbz)
		ORDER BY exampledata_id
		',
	'requiredPermissions' => 'admin'
);

