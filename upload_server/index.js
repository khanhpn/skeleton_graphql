import {ApolloServer, AuthenticationError} from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import { createStore } from "./store";
import ProductAPI from './datasources/product';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const store = createStore();
const dataSources = () => ({
  productAPI: new ProductAPI({store})
});

const server = new ApolloServer({
  typeDefs,
  resolvers ,
  subscriptions: {},
  dataSources
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
