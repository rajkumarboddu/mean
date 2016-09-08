var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

module.exports = function(){
	passport.use(new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL,
		passReqCallback: true
	},
	function(req, accessToken, refreshToken, profile, done){
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;
		var email = profile.emails ? profile.emails[0].value : '';
		var providerUserProfile = {
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			fullName: profile.displayName,
			email: email,
			username: profile.username,
			password: 'password@123',
			provider: 'facebook',
			providerId: profile.id,
			providerData: providerData
		};

		users.saveOAuthUserProfile(req, providerUserProfile, done);
	}
	))
}