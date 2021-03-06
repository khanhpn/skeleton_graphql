import {gql} from 'apollo-server';
import TimestampType from "./GraphQLTimestamp";

export default gql`
  scalar TimestampType

  type Query {
    products: [Product]
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
  }

  type Product {
    id: Int
    name: String
    images: [String]
    main_image: String
    createdAt: TimestampType
    updatedAt: TimestampType
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`;
