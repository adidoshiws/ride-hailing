CREATE TABLE drivers (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    location geometry(Point, 4326),
    created_at timestamp WITH time zone DEFAULT NOW(),
    updated_at timestamp WITH time zone
);

CREATE INDEX driver_location ON drivers USING btree (location);