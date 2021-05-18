# Safelink API Example

## URL

### /user/api/createLink
#### Request
링크를 생성하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
```javascript
// If url not includes a protocal then it is considered http.
{	
	apiKey: "Your api key.",
	alias: "deadbeef",
	url: "https://www.google.com/search?q=vo.la"
}
```
#### Response Success
```javascript
{ 
	fail: false,
  	data: {
		alias: "deadbeef"
	}
}
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 1062,
		msg: "이미 등록된 alias 입니다."
	}
}
```

---

### /user/api/readLink
링크 정보를 얻기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
{	
	apiKey: "Your api key.",
	alias: "deadbeef"
}
```
#### Response Success
```javascript
// If url not includes a protocal then it is considered http.
{	fail: false,
	data: {
		url: "https://www.google.com/search?q=vo.la",
		type: 0,
		click: 0
	}
}
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 1061,
		msg: "존재하지 않는 alias 입니다."
	}
}
```

---

### /user/api/updateLink
링크 정보를 업데이트 하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
// If url not includes a protocal then it is considered http.
{	
	apiKey: "Your api key.",
	alias: "deadbeef",
	update: {
		url: "https://search.naver.com/search.naver?query=vo.la"
	}
}
```
#### Response Success
```javascript
{ fail: false }
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 1061,
		msg: "존재하지 않는 alias 입니다."
	}
}
```

---

### /user/api/deleteLink
링크을 삭제 하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
// If url not includes a protocal then it is considered http.
{	
	apiKey: "Your api key.",
	alias: "deadbeef"
}
```
#### Response Success
```javascript
{ fail: false }
```
#### Response Fail
```javascript
{
	fail: true,
	data: {
		errno: 1061,
		msg: "존재하지 않는 alias 입니다."
	}
}
```
---

### ERROR Codes
