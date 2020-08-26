const findDuplicatedPropertyKeys = require('find-duplicated-property-keys');
 
const http = require('https');

let req = http.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences", function(res) {
	let data = '',
		json_data;

	res.on('data', function(stream) {
		data += stream;
	});
	res.on('end', function() {
        json_data = JSON.parse(data);
        fs = require('fs');
        fs.writeFile('urlContent.json', JSON.stringify(json_data), function (err) {
        if (err) return console.log(err);
    });
   
//Finding duplicates 
        
        const result = findDuplicatedPropertyKeys(JSON.stringify(json_data));
        if(result.toString() == null || result.toString() == "")
        console.log("No Duplicates found!");
        else
        console.log("Duplicates detected!");

	});
});

req.on('error', function(e) {
    console.log(e.message);
});




/*ANOTHER WAY: We can also detect duplicate keys by running a command on command prompt.First We have to
into the directory where the urlContent.json file is located.Then we will hit this command given below.

find-duplicated-property-keys -s urlContent.json*/




 
