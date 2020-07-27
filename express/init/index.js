const { PORT } = require("../defaults");
const connection = require('../connection.json'); // @todo connection data shouldn't be in repo files
const { Sequelize } = require('sequelize');
const models = require('../models');

const connectDatabase = async () => {

  const sequelize = new Sequelize({
    database: connection.database,
    username: connection.user,
    host: connection.host,
    port: connection.port,
    password: connection.password,
    dialect: 'postgres',
  });

  models.forEach(((model) => {
    model.init(model.getSchema(), {
      sequelize,
      modelName: model.getModelName(),
    });
  }));

  await sequelize.sync();
};

const init = async () =>  {
  try {
    await connectDatabase();

    console.log(`\n\nServer is live on : http://localhost:${PORT}\n\n`);
  }catch (e) {
    throw new Error(e);
  }
};

module.exports = init;