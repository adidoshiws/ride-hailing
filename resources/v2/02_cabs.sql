CREATE TABLE cabs (
    id INTEGER NOT NULL PRIMARY KEY,
    cab_type ENUM('Sedan', 'Hatchback', 'Auto', 'Bike'),
    cab_number integer NOT NULL UNIQUE,
    cab_model TEXT NOT NULL,
    driver_id INTEGER NOT NULL,
    created_at timestamp WITH time zone DEFAULT NOW(),
    updated_at timestamp WITH time zone,
    deleted_at timestamp WITH time zone
);

CREATE INDEX select_cab_type ON cabs(cab_type);