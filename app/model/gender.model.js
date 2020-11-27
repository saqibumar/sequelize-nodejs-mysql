module.exports = (sequelize, DataTypes) => {
	const Gender  = sequelize.define('gender', {
		id: {
			type: DataTypes.TINYINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(8),
			allowNull: false
	  }
	});
	
	

	
	return Gender;
}