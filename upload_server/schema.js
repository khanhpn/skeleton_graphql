import {gql} from 'apollo-server';
import TimestampType from "./GraphQLTimestamp";

export default gql`
  scalar TimestampType

  type Query {
    products: [Product]
  }

  type Product {
    id: Int
    name: String
    images: [String]
    main_image: String
    createdAt: TimestampType
    updatedAt: TimestampType
  }
`;
