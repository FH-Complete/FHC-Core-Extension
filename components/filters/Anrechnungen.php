<?php
$filterCmptArray = array(
	'app' => 'core',
	'datasetName' => 'anrechnungTableData',
	'query' => '
			SELECT DISTINCT
				anrechnung.anrechnung_id,
				anrechnung.prestudent_id,
				stg.studiengang_kz,
				stg.bezeichnung AS stg_bezeichnung,
				(person.nachname || \' \' || person.vorname) AS "student",				
				anrechnung.lehrveranstaltung_id,
				lv.bezeichnung AS lv_bezeichnung,
				anrechnung.dms_id,
				dmsversion.name AS "dokument_bezeichnung",
				anrechnung.anmerkung_student,
				(SELECT bezeichnung_mehrsprachig[1]
					FROM lehre.tbl_anrechnungstatus
					JOIN lehre.tbl_anrechnung_anrechnungstatus USING (status_kurzbz)
					WHERE anrechnung_id = anrechnung.anrechnung_id
					ORDER BY insertamum DESC
					LIMIT 1
				) AS status_kurzbz
		FROM lehre.tbl_anrechnung AS anrechnung
		JOIN public.tbl_prestudent USING (prestudent_id)
		JOIN public.tbl_person AS person USING (person_id)
		JOIN public.tbl_studiengang AS stg USING (studiengang_kz)
		JOIN lehre.tbl_lehrveranstaltung AS lv USING (lehrveranstaltung_id)
		LEFT JOIN campus.tbl_dms_version AS dmsversion USING (dms_id)
		JOIN lehre.tbl_anrechnung_anrechnungstatus USING (anrechnung_id)
	    WHERE stg.studiengang_kz IN (227, 330)
	    ORDER BY anrechnung.anrechnung_id DESC
	    LIMIT 10
		',
	'requiredPermissions' => 'admin'
);

