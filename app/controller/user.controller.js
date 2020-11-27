const db = require('../config/db.config.js');
const User = db.users;
const Gender = db.genders;
User.belongsTo(Gender, {foreignKey: 'gender_id', targetKey: 'id'});

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	User.create({  
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		birthday: req.body.birthday,
		password: req.body.password,
		gender_id: req.body.gender_id,
	}).then(user => {
		// Send created user to client
		res.send(user);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	User.findAll({
		include: [
			{
				model: db.genders,
			}
		]
	}).then(users => {
	  // Send all users to Client
	  res.send(users);
	});
};

// Find a User by Id
exports.findOne = (req, res) => {
	User.findOne({ 
		where: { id: req.params.userId },
		include: [
			{
				model: db.genders,
			}
		] }).then(user => {
		if (user === null) {
			res.send('Not found!');
		} else {
			res.send(user);
		}
	});
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.userId;
	User.update( req.body, 
					 { where: {id: req.params.userId} }
				   ).then((response) => {
					   if (response[0] === 0) {
							res.status(204).send("No record found to update");
					   }
					   else {
						   res.status(200).send("updated successfully a user with id = " + id);
					   }
				   })
				   .catch((err) => {
					   res.send("ERROR updating. ", err)
				   });
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy({
	  where: { id: id }
	}).then((response) => {
		if (response[0] === 0) {
			res.status(400).send("No record found to delete");
	   }
	   else {
		  res.status(200).send('deleted successfully a user with id = ' + id);
	   }
	})
	.catch((err) => {
		res.send("ERROR deleting", err)
	});
};