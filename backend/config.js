module.exports = {
	jwtSecret: 'simplereactnodejslogin',
	jwtSignOptions: { expiresIn: '1h' },
	mongoUri: '{{MongoUri}}',
	port: process.env.PORT || 3001,
	saltRound: 10,
};
