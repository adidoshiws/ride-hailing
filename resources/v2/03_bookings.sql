CREATE TABLE bookings (
    id INTEGER NOT NULL PRIMARY KEY,
    pickup TEXT NOT NULL,
    destination TEXT NOT NULL,
    user_id INTEGER NOT Null,
    cab_id INTEGER NOT Null,
    created_at timestamp WITH time zone DEFAULT NOW(),
    updated_at timestamp WITH time zone,
    deleted_at timestamp WITH time zone,
    CONSTRAINT booking_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT booking_cab_id FOREIGN KEY (cab_id) REFERENCES cabs (id)
);