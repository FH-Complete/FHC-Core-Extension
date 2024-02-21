INSERT INTO system.tbl_app (app) VALUES
    ('extension')
    ON CONFLICT (app) DO NOTHING;
