CREATE TABLE IF NOT EXISTS extension.tbl_exampledata (
    exampledata_id integer NOT NULL,
    uid varchar(32) NOT NULL,
    stringval varchar(64),
    integerval integer,
    dateval date,
    booleanval boolean,
    moneyval numeric (8, 2),
    dokument_bezeichnung varchar(64),
    dokument_id integer,
    textval text,
    examplestatus_kurzbz varchar(32) NOT NULL,
    CONSTRAINT tbl_exampledata_pk PRIMARY KEY (exampledata_id)
);

-- Grants
GRANT SELECT, INSERT, DELETE, UPDATE ON TABLE extension.tbl_exampledata TO vilesci;

-- Create Sequence
CREATE SEQUENCE IF NOT EXISTS extension.tbl_exampledata_exampledata_id_seq
	 INCREMENT BY 1
	 NO MAXVALUE
	 NO MINVALUE
	 CACHE 1;

-- Set default value for exampledata_id
ALTER TABLE extension.tbl_exampledata ALTER COLUMN exampledata_id SET DEFAULT nextval('extension.tbl_exampledata_exampledata_id_seq');

-- Grant permission on sequence
GRANT SELECT, UPDATE ON extension.tbl_exampledata_exampledata_id_seq TO vilesci;

-- Add foreign key constraint
DO $$
BEGIN
ALTER TABLE extension.tbl_exampledata ADD CONSTRAINT tbl_exampledata_examplestatus_fk FOREIGN KEY (examplestatus_kurzbz)
    REFERENCES extension.tbl_examplestatus (examplestatus_kurzbz) MATCH FULL
    ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not create foreign key constraint on tbl_exampledata_examplestatus_fk.';
END;
END $$;

-- Add comment to table
COMMENT ON TABLE extension.tbl_exampledata IS 'Generic Example Data for Testing Purpose only';

-- Insert Pseudo Data
INSERT INTO extension.tbl_exampledata (uid, stringval, integerval, dateval, booleanval, moneyval, dokument_bezeichnung, dokument_id, textval, examplestatus_kurzbz)
SELECT
    -- Increments like ma001, ma002, ma003....
    'ma' || LPAD(seq_num::TEXT, 3, '0') AS uid,
    --  Alternates between 'Person A', 'Person B', ..., 'Person Z', 'Person AA', 'Person BB', ...
    CASE
        WHEN (seq_num - 1) % 676 = 0 THEN 'Person ' || CHR(65 + ((seq_num - 1) / 676)) || CHR(65 + (((seq_num - 1) % 676) / 26)) || CHR(65 + ((seq_num - 1) % 26))
        ELSE 'Person ' || CHR(65 + (((seq_num - 1) % 676) / 26)) || CHR(65 + ((seq_num - 1) % 26))
        END AS stringval,
    -- Random number between 1 - 15
    FLOOR(RANDOM() * 15) + 1 AS integerval,
    -- Random date within last 10 years
    CURRENT_DATE - INTERVAL '10 years' * RANDOM() AS dateval,
    -- Randomly true or false
    RANDOM() < 0.5 AS booleanval,
    -- random 1800.00 - 4500.99
    CAST(1800 + RANDOM() * (4500 - 1800) AS NUMERIC(8, 2)) AS moneyval,
    -- Dokument_001, Dokument_002, Dokument_003,...
    'Dokument_' || LPAD(seq_num::TEXT, 3, '0') AS dokument_bezeichnung,
    -- Starts with 1, 2, 3,...
    seq_num AS dms_id,
    -- Lorem ipsum text with length between 20 - 60 chars
    SUBSTRING('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' FROM 1 FOR 20 + FLOOR(RANDOM() * 41)::INTEGER) AS textval,
    -- Randomly selected from 'neu', 'inbearbeitung', 'akzeptiert' or 'abgelehnt'
    CASE FLOOR(RANDOM() * 4)
    WHEN 0 THEN 'neu'
    WHEN 1 THEN 'inbearbeitung'
    WHEN 2 THEN 'akzeptiert'
    ELSE 'abgelehnt'
END AS examplestatus_kurzbz
FROM generate_series(1, 100) AS seq_num;
