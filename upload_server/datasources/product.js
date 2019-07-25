import SQL from "sequelize";
import {DataSource } from "apollo-datasource";

class ProductAPI extends DataSource {
  constructor( {store} ) {
    super();
    this.store = store;
  }

  async products() {
    let products = await this.store.products.findAll({order: [["id", "ASC"]]});

    return products;
  }
}

export default ProductAPI;
