import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { getNode } from '@gql/node';
import { createConnection } from 'graphql-sequelize';
import { timestamps } from '../timestamps';
import db from '@database/models';
import { sequelizedWhere } from '@database/dbUtils';
import { totalConnectionFields } from '@utils/index';
import { getQueryFields, TYPE_ATTRIBUTES } from '@server/utils/gqlFieldUtils';

const { nodeInterface } = getNode();
export const bookingFields = {
  id: { type: GraphQLNonNull(GraphQLID) },
  name: { type: GraphQLString },
  location: { type: GraphQLNonNull(GraphQLFloat) }
};

// Booking
export const Booking = new GraphQLObjectType({
  name: 'Booking',
  interfaces: [nodeInterface],
  fields: () => ({
    ...getQueryFields(bookingFields, TYPE_ATTRIBUTES.isNonNull),
    ...timestamps
  })
});

const BookingConnection = createConnection({
  name: 'bookings',
  target: db.bookings,
  nodeType: Booking,
  before: (findOptions, args, context) => {
    findOptions.include = findOptions.include || [];
    if (context?.users?.id) {
      findOptions.include.push({
        model: db.users,
        where: {
          id: context.users.id
        }
      });
    }
    if (context?.cabs?.id) {
      findOptions.include.push({
        model: db.cabs,
        where: {
          id: context.cabs.id
        }
      });
    }
    findOptions.where = sequelizedWhere(findOptions.where, args.where);
    return findOptions;
  },
  ...totalConnectionFields
});

export const bookingQueries = {
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  query: {
    type: Booking
  },
  list: {
    ...BookingConnection,
    resolve: BookingConnection.resolve,
    type: BookingConnection.connectionType,
    args: BookingConnection.connectionArgs
  },
  model: db.bookings
};

export const bookingMutations = {
  args: bookingFields,
  type: Booking,
  model: db.bookings
};
