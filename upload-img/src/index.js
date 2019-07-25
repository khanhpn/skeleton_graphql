import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'dotenv/config';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client'

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
  }
  if (networkError) {
  }
});

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_LINK_API,
  headers: {
    'X-Custom-Header': 'foo',
    'Authorization': `Bearer ${ process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN }`
  }
});
const link = ApolloLink.from([errorLink, uploadLink]);
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById('root'));

serviceWorker.unregister();
