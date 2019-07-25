import React from 'react';
import './App.css';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`


function App() {
  return (
    <div className="App">
      <Mutation mutation={SINGLE_UPLOAD}>
      {singleUpload => (
        <input type="file" required
          onChange={
            ({ target: { validity, files: file } }) => {
              validity.valid && singleUpload({ variables: { file } })
            }
          }
        />
      )}
    </Mutation>
    </div>
  );
}

export default App;
