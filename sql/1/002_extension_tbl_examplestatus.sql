CREATE TABLE IF NOT EXISTS extension.tbl_examplestatus (
    examplestatus_kurzbz varchar(32) NOT NULL,
    bezeichnung varchar(256)[] NOT NULL,
    CONSTRAINT tbl_examplestatus_pk PRIMARY KEY (examplestatus_kurzbz)
    );

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE extension.tbl_examplestatus TO vilesci;

INSERT INTO extension.tbl_examplestatus(examplestatus_kurzbz, bezeichnung) VALUES
     ('neu', '{"Neu", "New"}'),
     ('inbearbeitung', '{"In Bearbeitung", "In progress"}'),
     ('akzeptiert', '{"Akzeptiert", "Accepted"}'),
     ('abgelehnt', '{"Abgelehnt", "Rejected"}')
    ON CONFLICT (examplestatus_kurzbz) DO NOTHING;

COMMENT ON TABLE extension.tbl_examplestatus IS 'Example Status for Testing Purpose only';