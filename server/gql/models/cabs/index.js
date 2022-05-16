import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLEnumType, GraphQLObjectType, GraphQLString } from 'graphql';
import { getNode } from '@gql/node';
import { createConnection } from 'graphql-sequelize';
import { timestamps } from '../timestamps';
import db from '@database/models';
import { sequelizedWhere } from '@database/dbUtils';
import { totalConnectionFields } from '@utils/index';
import { getQueryFields, TYPE_ATTRIBUTES } from '@server/utils/gqlFieldUtils';

const CabEnumType = new GraphQLEnumType({
  name: 'CabTypeEnum',
  values: {
    SEDAN: {
      value: 0
    },
    HATCHBACK: {
      value: 1
    },
    AUTO: {
      value: 2
    },
    BIKE: {
      value: 3
    }
  }
});

const { nodeInterface } = getNode();
export const cabFields = {
  id: { type: GraphQLNonNull(GraphQLID) },
  cab_type: { type: GraphQLNonNull(CabEnumType) },
  cab_number: { type: GraphQLNonNull(GraphQLInt) },
  cab_model: { type: GraphQLString }
};

// Cab
export const Cab = new GraphQLObjectType({
  name: 'Cab',
  interfaces: [nodeInterface],
  fields: () => ({
    ...getQueryFields(cabFields, TYPE_ATTRIBUTES.isNonNull),
    ...timestamps
  })
});

const CabConnection = createConnection({
  name: 'cabs',
  target: db.cabs,
  nodeType: Cab,
  before: (findOptions, args, context) => {
    findOptions.include = findOptions.include || [];
    if (context?.drivers?.id) {
      findOptions.include.push({
        model: db.drivers,
        where: {
          id: context.drivers.id
        }
      });
    }
    findOptions.where = sequelizedWhere(findOptions.where, args.where);
    return findOptions;
  },
  ...totalConnectionFields
});

export const cabQueries = {
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  query: {
    type: Cab
  },
  list: {
    ...CabConnection,
    resolve: CabConnection.resolve,
    type: CabConnection.connectionType,
    args: CabConnection.connectionArgs
  },
  model: db.cabs
};

export const cabMutations = {
  args: cabFields,
  type: Cab,
  model: db.cabs
};
