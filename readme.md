# Safelink API Example

## Link

### /user/api/createLink
한개의 링크를 생성합니다.
#### Request
```javascript
/**
 * POST				/user/api/createLink
 * HOST:			<Your domain>
 * Content-Type:	application/json
 */
{	
    apiKey: "<Your API key>",
    domain: "<Your domain>",
    url: "https://www.google.com/search?q=vo.la"
}
/** Alway custom alias including '_' symbol at last of string. */
{	
    apiKey: "<Your API key>",
    domain: "<Your domain>",
    url: "https://search.naver.com/search.naver?query=vo.la",
    custom:  "보라_"
}
```

#### Response Success
```javascript
{ 
    fail: false,
      data: {
        alias: "zXc4f"
    }
}

{ 
    fail: false,
      data: {
        alias: "보라_"
    }
}
```
#### Response Fail
```javascript
{
    fail: {
        errno: 1101,
        msg: "이미 등록된 alias 입니다.",
        meta: '<alias>'
    }
}
```

---
### /user/api/createLinks
#### Request
여러개의 링크를 생성합니다.

```javascript
/**
 * POST				/user/api/createLink
 * HOST:			<Your domain>
 * Content-Type:	application/json
 */
{	
    apiKey: "<Your API key>",
    links: [
        {
            domain: "<Your domain>",
            url: "https://search.naver.com/search.naver?query=순"
        },
        {
            domain: "<Your domain>",
            url: "https://search.naver.com/search.naver?query=서"
        },
        {
            domain: "<Your domain>",
            url: "https://search.naver.com/search.naver?query=대"
        },
        {
            domain: "<Your domain>",
            url: "https://search.naver.com/search.naver?query=로"
        }
    ]
}
```

#### Response Success
```javascript
{
    "fail": false,
    "data": {
        "aliases": [
            "Az7Hn",
            "AkY7p",
            "wUqJE",
            "Mko0R"
        ]
    }
}
```
#### Response Fail
```javascript
{
    fail: {
        errno: 1101,
        msg: "이미 등록된 alias 입니다.",
        meta: '<alias>'
    }
}
```
---

### /user/api/readLink
링크 정보를 얻기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.

#### Request
```javascript
/**
 * POST				/user/api/readLink
 * HOST:			<Your domain>
 * Content-Type:	application/json
 */
{	
    apiKey: "Your api key.",
    domain: "<Your domain>",
    alias: "zXc4f"
}
```
#### Response Success
```javascript
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
    fail: {
        errno: 1102,
        msg: "존재하지 않는 alias 입니다."
    }
}
```

---

### /user/api/updateLink
링크 정보를 업데이트 하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
/**
 * POST				/user/api/updateLink
 * HOST:			<Your domain>
 * Content-Type:	application/json
 */
{	
    apiKey: "<Your API key>",
    alias: "zXc4f",
    update: {
        url: "https://search.naver.com/search.naver?query=vo.la",
        custom: "보라색_"
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
    fail: {
        errno: 1101,
        msg: "이미 등록된 Alias 입니다.",
        meta: '<alias>'
    }
}

{
    fail: {
        errno: 1102,
        msg: "존재하지 않는 alias 입니다."
    }
}
```

---

### /user/api/deleteLink
링크을 삭제 하기 위해서는 아래와 같은 JSON 형태로 POST method을 통해 서버와 통신해야합니다.
#### Request
```javascript
/**
 * POST				/user/api/updateLink
 * HOST:			<Your domain>
 * Content-Type:	application/json
 */
{	
    apiKey: "<Your API key>",
    alias: "보라_"
}
```
#### Response Success
```javascript
{ fail: false }
```
#### Response Fail
```javascript
{
    fail: {
        errno: 2000,
        msg: "Internal Server Error"
    }
}
```
---

### ERROR Codes
errono | msg 
|---| ---
1000 | 사용할 수 없는 Domain 입니다.
1101 | 이미 등록된 Alias 입니다.
1102 | 존재 하지 않는 Alias 입니다.
2000 | Internal Server Error