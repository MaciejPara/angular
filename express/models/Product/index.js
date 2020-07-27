const { DataTypes, Model } = require('sequelize');

class Product extends Model {
  static modelName = 'Product';
  static schema = {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
    },
    shortDescription: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    thumbNail: {
      type: DataTypes.STRING
    },
  };

  /**
   * Get model schema
   * @returns {{name: {type: StringDataTypeConstructor, allowNull: boolean}, lastName: {type: StringDataTypeConstructor}}}
   */
  static getSchema(){
    return this.schema;
  }

  /**
   * Get model name
   * @returns {string}
   */
  static getModelName(){
    return this.modelName;
  }
}

module.exports = Product;