CREATE TABLE bookings (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pickup geometry(Point, 4326),
    destination geometry(Point, 4326),
    user_id INTEGER NOT Null,
    cab_id INTEGER NOT Null,
    created_at timestamp WITH time zone DEFAULT NOW(),
    updated_at timestamp WITH time zone,
    deleted_at timestamp WITH time zone,
    CONSTRAINT booking_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT booking_cab_id FOREIGN KEY (cab_id) REFERENCES cabs (id)
);
