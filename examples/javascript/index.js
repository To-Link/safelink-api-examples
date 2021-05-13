const http = require('http');
const Promise = require('promise');

/**
 * @param {string} apiPath
 * @param {object} jsonData
 * @returns {Promise<object>} apiResult
*/
function APICall(apiPath, jsonData){
	return new Promise((resolve, reject)=>{
		const data = JSON.stringify(jsonData);
		const option = {
			"host": 'localhost',
			"path": apiPath,
			"port": 8000, 
			"method": 'POST',
			"headers": {
				"Content-Type": 'application/json',
				"Content-Length": data.length
			},
			"timeout": 3000
		};

		const req = http.request(option, (res)=>{
			let str = '';
			
			res.on('data', (chunk)=>{
				str += chunk;
			});

			res.on('end', ()=>{
				resolve(JSON.parse(str));
			});
		});

		req.on('error', (err)=>{
			console.error(err);
		});

		req.on('timeout', ()=>{
			console.error('request timeout.');
			req.destroy();
		});

		req.write(data);

		req.end();

	});
}

/**
 * @returns {Promise<boolean>}
*/
function createLink(){
	return new Promise((resolve, reject)=>{
		const api_key = 'Your API Key';
		const create_msg = {
			"apiKey": api_key,
			"alias": "deadbeef",
			"url": "https://www.google.com/search?q=vo.la",
			"option": {
				"expired": "2045-12-25 15:00:00"
			}
		};

		APICall('/user/api/createLink', create_msg).then((apiResult)=>{
			if(apiResult.fail){
				console.error(apiResult);
				resolve(false);
			}
			else{
				console.log(apiResult);
				resolve(true);
			}
		});

	});
}

function readLink(){
	return new Promise((resolve, reject)=>{
		const api_key = 'Your API Key';
		const read_msg = {
			"apiKey": api_key,
			"alias": "deadbeef"
		};

		APICall('/user/api/readLink', read_msg).then((apiResult)=>{
			if(apiResult.fail){
				console.error(apiResult);
				resolve(false);
			}
			else{
				console.log(apiResult);
				resolve(true);
			}
		});

	});
}

function updateLink(){
	return new Promise((resolve, reject)=>{
		const api_key = 'Your API Key';
		const update_msg = {
			"apiKey": api_key,
			"alias": "deadbeef",
			"update": {
				"alias": "livebeef",
				"url": "https://search.naver.com/search.naver?query=vo.la"
			}
		}

		APICall('/user/api/updateLink', update_msg).then((apiResult)=>{
			if(apiResult.fail){
				console.error(apiResult);
				resolve(false);
			}
			else{
				console.log(apiResult);
				resolve(true);
			}
		});

	});
}

function deleteLink(){
	return new Promise((resolve, reject)=>{
		const api_key = 'Your API Key';
		const delete_msg = {
			"apiKey": api_key,
			"alias": "livebeef"
		};

		APICall('/user/api/deleteLink', delete_msg).then((apiResult)=>{
			if(apiResult.fail){
				console.error(apiResult);
				resolve(false);
			}
			else{
				console.log(apiResult);
				resolve(true);
			}
		});

	});
}

// main entry
console.log('create Link');
createLink().then(()=>{
	console.log('read Link');
	return readLink();
}).then(()=>{
	console.log('update Link');
	return updateLink();
}).then(()=>{
	console.log('delete Link');
	return deleteLink();
})