import db from '@database/models';

export const getBookingsById = async id => {
  const bookings = await db.bookings.findOne({ where: { id } });
  return bookings;
};
