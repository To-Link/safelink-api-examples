const http = require('http');

/**
 * @param {string} apiPath
 * @param {object} data
 * @returns {Promise<string>}
*/
function APICall(apiPath, data){
	return Promise((resolve, reject)=>{
		const option = {
			"host": '',
			"path": apiPath,
			"port": 443, 
			"method": 'POST',
			"headers": {
				"Content-Type": 'application/',
				"Content-Length": Buffer.byteLength(data)
			}
		};

		const req = http.request(option, (res)=>{
			let str = '';
			
			res.on('data', (chunk)=>{
				str += chunk;
			});

			res.on('end', ()=>{
				resolve(str);
			})
		})

		req.on('error', (e) => {
			console.error(e)
		});

		req.write(JSON.stringify(data));

		req.end();
	});
}

// apiKey
const api_key = 'Your API Key.';

// Create Link
const create_msg = {
	"apiKey": api_key,
	"alias": "deadbeef",
	"url": "https://www.google.com/search?q=vo.la",
	"option": {
		"expired": "2045-12-25 15:00:00"
	}
}
APICall('/user/api/createLink', create_msg)

// Read Link
const read_msg = {
	"apiKey": api_key,
	"alias": "deadbeef"
}
APICall('/user/api/readLink', read_msg)

// Update Link
const update_msg = {
	"apiKey": api_key,
	"alias": "deadbeef",
	"update": {
		"url": "https://search.naver.com/search.naver?query=vo.la"
	}
}
APICall('/user/api/updateLink', update_msg)

// Delete Link
const delete_msg = {
	"apiKey": api_key,
	"alias": "deadbeef"
}
APICall('/user/api/updateLink', delete_msg)