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
	"season_id": 1,
	"startReleaseTimestamp": 1000000,
	"claims": {
	  "0xc8edf97bf36d8d2fb61f82d0d9c60a6477bfc461": "2000000",
	  "0x28b3e064bc29fab40e3afaa8f977161ce93c0612": "1500000",
	  "0xeb19c669bfe83f5cec591a8b9f0baec4e10bf0d5": "500000",
	  "0x361891377452071292D75B8aaD6918333382bAab": "50000",
	  "0xe33dE226E95e1f5E4A84E6E82c9a516F82dF1e71": "60000",
	  "0x1Ffd8d5F7c148561d4a17DD1377AE8fA39a81073": "40000",
	  "0x313557AbaE39f0487Fc54671A6f01f21760BA585": "10000",
	  "0x65f90aa65b68f1b3678fbb9d055f150d21a683a8": "15000",
	  "0xe175d46798028d2669dd2d3684d9b07019f81ffd": "20000",
	  "0x2a9DC479b3fCC0F7904096c9dD888aAAdeDcdbA5": "10000000",
	  "0xb788cd2bad15ab95f7814e0cb23c450a057a63c9": "100000"
	}
}
```