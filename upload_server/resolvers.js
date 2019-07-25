export default {
  Query: {
    products: async(_, {}, {dataSources}) => {
      return await dataSources.productAPI.products();
    }
  }
}
