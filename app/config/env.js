const env = {
  database: 'upwork',
  username: 'root',
  password: '',
  host: 'localhost',
  port: '9090',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;