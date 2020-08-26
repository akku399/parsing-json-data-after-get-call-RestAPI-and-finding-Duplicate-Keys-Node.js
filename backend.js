const http = require('https');

let req = http.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences", function(res) {
	let data = '',
		json_data;

	res.on('data', function(stream) {
		data += stream;
	});
	res.on('end', function() {
		json_data = JSON.parse(data);
		console.log(json_data);
	});
});

req.on('error', function(e) {
    console.log(e.message);
});

