import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { getNode } from '@gql/node';
import { createConnection } from 'graphql-sequelize';
import { timestamps } from '../timestamps';
import db from '@database/models';
import { sequelizedWhere } from '@database/dbUtils';
import { totalConnectionFields } from '@utils/index';
import { getQueryFields, TYPE_ATTRIBUTES } from '@server/utils/gqlFieldUtils';

const { nodeInterface } = getNode();
export const driverFields = {
  id: { type: GraphQLNonNull(GraphQLID) },
  name: { type: GraphQLNonNull(GraphQLString) },
  location: { type: GraphQLNonNull(GraphQLFloat) }
};

// Driver
export const Driver = new GraphQLObjectType({
  name: 'Driver',
  interfaces: [nodeInterface],
  fields: () => ({
    ...getQueryFields(driverFields, TYPE_ATTRIBUTES.isNonNull),
    ...timestamps
  })
});

const DriverConnection = createConnection({
  name: 'drivers',
  target: db.drivers,
  nodeType: Driver,
  before: (findOptions, args, context) => {
    findOptions.include = findOptions.include || [];
    findOptions.where = sequelizedWhere(findOptions.where, args.where);
    return findOptions;
  },
  ...totalConnectionFields
});

export const driverQueries = {
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  query: {
    type: Driver
  },
  list: {
    ...DriverConnection,
    resolve: DriverConnection.resolve,
    type: DriverConnection.connectionType,
    args: DriverConnection.connectionArgs
  },
  model: db.drivers
};

export const driverMutations = {
  args: driverFields,
  type: Driver,
  model: db.drivers
};
