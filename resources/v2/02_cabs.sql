CREATE TYPE cab_kind AS ENUM ('Sedan', 'Hatchback', 'Auto', 'Bike');

CREATE TABLE cabs (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    cab_type cab_kind,
    cab_number integer NOT NULL UNIQUE,
    cab_model TEXT NOT NULL,
    driver_id INTEGER NOT NULL,
    created_at timestamp WITH time zone DEFAULT NOW(),
    deleted_at timestamp WITH time zone,
    CONSTRAINT cab_driver_id FOREIGN KEY (driver_id) REFERENCES drivers (id)
);

CREATE INDEX select_cab_type ON cabs(cab_type);