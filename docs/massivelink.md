# Safelink Massivelink API Example

## URL

### /user/api/createMassivelink
#### Request
대용량 링크를 생성하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
```javascript
// [order, url, custom, password, expiration] 순입니다.
// 생략시에는 없는 값이 됩니다. custom 으로 생성시에, 중복값이 있을 경우에 생성이
// 안될 수도 있으니 자동으로 생성하는걸 추천합니다.
{	
	apiKey: "Your api key.",
	name: 'My First Massivelink',
	massivelink: [
		[1, 'https://www.google.com/search?q=1', 'custom1', 'password1', '2021-12-31 00:00:00'],
		[2, 'https://www.google.com/search?q=2'],
		[3, 'https://www.google.com/search?q=3'],
		[4, 'https://www.google.com/search?q=4'],
		[5, 'https://www.google.com/search?q=5'],
		...
	]
}
```
#### Response Success
```javascript
{ 
	fail: false,
	insertedId: 1
}
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 2062,
		msg: "중복된 alias가 있어 등록에 실패했습니다."
	}
}
```

---

### /user/api/readMassivelinkById
대용량 링크의 정보를 얻기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
{	
	apiKey: "Your api key.",
	id: 1
}
```
#### Response Success
```javascript
{	fail: false,
	data: {
		id: 1,
		name: 'My First Massivelink',
		click: 0,
		date: '2021-06-30 16:07',
		status: 1
	}
}
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 2061,
		msg: "존재하지 않는 Massivelink 입니다."
	}
}

{
	fail: true,
	data: {
		errno: 2101,
		msg: "대용량 링크가 생성중입니다."
	}
}

{
	fail: true,
	data: {
		errno: 2102,
		msg: "대용량 링크가 삭제중입니다."
	}
}
```

### /user/api/readMassivelinkChildLinksById
대용량 링크의 링크 리스트를 얻기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
{	
	apiKey: "Your api key.",
	id: 1
}
```
#### Response Success
```javascript
// [order, short, linkId] 순입니다. linkId는 /user/api/readLinkById 을 통해서 
// 좀 더 자세한 정보를 얻어올 수 있습니다.
{	fail: false,
	data: {
		links: [
			[1, 'custom1', 12],
			[2, 'Axzvg', 13],
			[3, 'BxCvx', 15],
			[4, 'TxCv4', 22],
			[5, 'U6RvZ', 27],
			...
		]
	}
}
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 2061,
		msg: "존재하지 않는 Massivelink 입니다."
	}
}
```

---

### ERROR Codes
