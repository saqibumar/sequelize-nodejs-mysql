const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  },
  define: {
    timestamps: false
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



//Models/tables
db.users = require('../model/user.model.js')(sequelize, Sequelize);
db.genders = require('../model/gender.model.js')(sequelize, Sequelize);

module.exports = db;