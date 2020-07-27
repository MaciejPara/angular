'use strict';

const defaultImage = "https://via.placeholder.com/1200x400";
const defaultImageThumbNail = "https://via.placeholder.com/400x500";

const products = [];

for(let i = 0; i < 20; i++){
  products.push({
    name: `Iphone X pro ${i}`,
    price: `$${400 + i}`,
    img: defaultImage,
    thumbNail: defaultImageThumbNail,
    shortDescription: "Short description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', products, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', products, {});
  }
};
