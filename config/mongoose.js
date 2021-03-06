var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
	var db = mongoose.connect(config.db);

	// registering a model
	require('../app/models/users.server.model');
	require('../app/models/posts.server.model');
	require('../app/models/articles.server.model');

	return db;
}