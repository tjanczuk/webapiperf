if (typeof process.env.IISNODE_VERSION === 'undefined') {
	
	// we are running self-hosted

	var cluster = require('cluster');
	if (cluster.isMaster) {

		// cluster's master process: create as many workers as there are CPUs

		require('os').cpus().forEach(cluster.fork);
	}
	else {

		// cluster's worker process

		setupServer();
	}
}
else {

	// process created by iisnode

	setupServer();
}

function setupServer() {
	var sampleData = require('./sample-data.js');
	var restify = require('restify');
	var server = restify.createServer();
	server.use(restify.bodyParser()); // enable parsing of POST reqeusts with JSON
	server.get('/Customer/:customerId', function (req, res, next) {
		res.send(sampleData.customer);
		return next();
	});
	server.post('/Order/:customerId', function (req, res, next) {
		res.send(sampleData.orders);
		return next();
	});
	server.listen(process.env.PORT || 8000);
}