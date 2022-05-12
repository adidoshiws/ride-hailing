CREATE TABLE drivers (
    id INTEGER NOT NULL PRIMARY KEY,
    driver_name TEXT NOT NULL,
    lat DECIMAL(8, 6) NOT NULL,
    long DECIMAL(9, 6) NOT NULL,
    created_at timestamp WITH time zone DEFAULT NOW(),
    updated_at timestamp WITH time zone,
    deleted_at timestamp WITH time zone
);

CREATE INDEX drivers_lat ON drivers USING btree (lat);

CREATE INDEX drivers_long ON drivers USING btree (long);

