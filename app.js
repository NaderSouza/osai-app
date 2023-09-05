const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const database_name = 'database.db';

// Database();
const app = express();

app.use('/', express.static(path.join(__dirname + '/public')));

app.get('/create-database', function (request, response) {

	let database = new sqlite3.Database(database_name);

	database.run('CREATE TABLE gps ( user VARCHAR(255) NOT NULL PRIMARY KEY, lat double, lng double, ambulance_lat double, ambulance_lng double );', [], function (response) {
		console.log(response);
	});

	database.run('CREATE TABLE users ( document VARCHAR(255) NOT NULL PRIMARY KEY, password VARCHAR(255), firstname VARCHAR(255), lastname VARCHAR(255), email VARChAR(255), location VARCHAR(255), birthdate VARCHAR(255), phone VARCHAR(255) );', [], function (response) {
		console.log(response);
	});
	database.close();
	response.json({status:'ok'});
});

app.get('/send-info', function(request, response) {

	let database = new sqlite3.Database(database_name);

	// database.run('INSERT OR REPLACE INTO gps (user, lat, lng) VALUES ( )');
	database.run('INSERT INTO gps (user, lat, lng) VALUES ("' + request.query.user + '", ' + request.query.lat + ',' + request.query.lng + ') ON CONFLICT (user) DO UPDATE SET lat = ' + request.query.lat + ', lng = ' + request.query.lng);

	response.json({
		status:'ok',
	});

	database.close();

});

app.get('/send-ambulance-info', function(request, response) {

	let database = new sqlite3.Database(database_name);

	// database.run('INSERT OR REPLACE INTO gps (user, ambulance_lat, ambulance_lng) VALUES ( "' + request.query.user + '", ' + request.query.lat + ',' + request.query.lng + ')');
	database.run('INSERT INTO gps (user, ambulance_lat, ambulance_lng) VALUES ("' + request.query.user + '", ' + request.query.lat + ',' + request.query.lng + ') ON CONFLICT (user) DO UPDATE SET ambulance_lat = ' + request.query.lat + ', ambulance_lng = ' + request.query.lng);

	response.json({
		status:'ok',
	});

	database.close();

});

app.get('/get-info', function(request, response) {

	let database = new sqlite3.Database(database_name);

	database.all('SELECT * FROM gps WHERE user = "' + request.query.user + '";', [], function (output, rows) {
		
		if (!Array.isArray(rows) || rows.length <= 0)
			return response.json({'status':'nok'});

		response.json({
			status:'ok',
			user: request.query.user,
			position: {lat: rows[0].lat, lng: rows[0].lng},
			ambulance: {lat: rows[0].ambulance_lat, lng: rows[0].ambulance_lng}
		});
		database.close();
	});


});

app.get('/get-all-clients', function(request, response) {

	let database = new sqlite3.Database(database_name);

	database.all('SELECT * FROM gps WHERE user = "' + request.query.user + '";', [], function (output, rows) {
		
		if (!Array.isArray(rows))
			return response.json({'status':'nok'});

		response.json({
			status:'ok',
			user: rows[0].user,
			lat: rows[0].lat,
			lng: rows[0].lng
		});
		database.close();
	});


});

app.get('/login-cli', function(request, response) {

	let database = new sqlite3.Database(database_name);

	database.all('SELECT * FROM users WHERE document = "' + request.query.username + '" AND password = "' + request.query.password + '";', [], function (output, rows) {

		if (!Array.isArray(rows) || rows.length <= 0)
			return response.json({'status':'nok'});

		response.json({
			status:'ok',
			user: rows[0].document
		});
		
		database.close();
	
	});

});

app.get('/login-pro', function(request, response) {

	let database = new sqlite3.Database(database_name);

	database.all('SELECT * FROM users WHERE document = "' + request.query.username + '" AND password = "' + request.query.password + '";', [], function (output, rows) {

		if (!Array.isArray(rows) || rows.length <= 0)
			return response.json({'status':'nok'});

		response.json({
			status:'ok',
			user: request.query.document
		});
		
		database.close();
	
	});

});

app.get('/register-pro', function(request, response) {

	let database = new sqlite3.Database(database_name);

	database.run('INSERT OR REPLACE INTO users (document, password, firstname, lastname, email, location, birthdate, phone) VALUES ( "' + request.query.document + '", "' + request.query.password + '", "' + request.query.firstname + '", "' + request.query.lastname + '", "' + request.query.email + '", "' + request.query.location + '", "' + request.query.birthdate + '", "' + request.query.phone + '")', [], function (queryResponse) {
		
		response.redirect('/MapaPro.html');
		
		database.close();
	});

});

app.get('/request-help', function(request, response) {

	console.log(request);

});

app.listen(process.env.port || 3000);