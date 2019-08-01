import React from 'react';
import './App.css';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone'

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
        <Dropzone onDrop={acceptedFiles => singleUpload({variables: {file: acceptedFiles}})}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      )}
    </Mutation>
    </div>
  );
}

export default App;
