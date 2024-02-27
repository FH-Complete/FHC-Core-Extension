INSERT INTO system.tbl_app (app) VALUES
    ('fhctemplate')
    ON CONFLICT (app) DO NOTHING;
