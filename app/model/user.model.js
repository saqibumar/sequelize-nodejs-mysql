module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('user', 
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		  },
		first_name: {
			type: DataTypes.STRING(20)
		},
		last_name: {
			type: DataTypes.STRING(20)
		},
		birthday: {
			type: DataTypes.DATE
		},
		password: {
			type: DataTypes.STRING(20)
		},
		gender_id: {
			type: DataTypes.TINYINT,
			allowNull: false
		}
	});

	return User;
}