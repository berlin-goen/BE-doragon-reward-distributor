Thêm file .env, cập nhật địa chỉ SmartContract và địa chỉ của admin
```
SECRET=
SC_ADDRESS=
```

Cài gói
`yarn`

Start server
`node app.js`

Ví dụ payload cho `/season`
```
{
	"season_id": 3,
	"startReleaseTimestamp": 1000000,
	"claims": {
	  "0xc8edf97bf36d8d2fb61f82d0d9c60a6477bfc461": {
	  	"dorAmount": "1",
	  	"goldAmount": "1000000"
	  },
	  "0x28b3e064bc29fab40e3afaa8f977161ce93c0612": {
	  	"dorAmount": "10000000",
	  	"goldAmount": "1000000"
	  },
	  "0xeb19c669bfe83f5cec591a8b9f0baec4e10bf0d5": {
	  	"dorAmount": "10000000",
	  	"goldAmount": "1000000"
	  },
	  "0x361891377452071292D75B8aaD6918333382bAab": {
	  	"dorAmount": "10000000",
	  	"goldAmount": "1000000"
	  },
	  "0x2a9DC479b3fCC0F7904096c9dD888aAAdeDcdbA5": {
	  	"dorAmount": "10000000",
	  	"goldAmount": "123412"
	  }
	}
}

```