import SQL from "sequelize";

export const createStore = () => {
  const Op = SQL.Op;
  const operationAliases = {
    $in: Op.in,
  };

  const db = new SQL(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: "postgresql",
    operationAliases,
  });

  const products = db.define('products', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    name: SQL.STRING,
    description: SQL.TEXT,
    images: SQL.ARRAY(SQL.JSON),
    main_image: SQL.TEXT,
    product_type: SQL.BOOLEAN,
    price: SQL.TEXT,
    category_id: SQL.INTEGER,
    maker_id: SQL.INTEGER
  });

  return {products}
}
