// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongsTo Category

Category.hasMany(Product, {
  // Define a category as having many products, thus creating a foreign key in the `product` table
  foreignKey: "category_id",
});
// Categories have many Products

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: "product_id",
}),
  // Products belongToMany Tags (through ProductTag)

  Tag.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    through: ProductTag,
    foreignKey: "tag_id",
  });
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
