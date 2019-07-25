import React from 'react';
import './App.css';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  {
    products {
      id
      name
    }
  }
`;


function App() {
  return (
    <div className="App">
      <Query query={GET_CURRENT_USER}>
        {({data, loading}) => {
          const { products } = data;
          if (loading || products.length <= 0) {
            return <div>Loading ...</div>;
          }
          return (
            <>{products[0].name}</>
          )
        }}
      </Query>
    </div>
  );
}

export default App;
