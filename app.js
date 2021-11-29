const express = require('express')
require('dotenv').config();
const parseRewards = require('./merkle-proof/parseRewards').parseRewards;
var bodyParser = require('body-parser');
const ethers = require('ethers')
const abi = require('./TokenLocker')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const port = 3000

app.post('/season', async (req, res) => {
  const seasonID = req.body['season_id']
  const startRelease = req.body['startReleaseTimestamp']
  const rewards = parseRewards(req.body['claims'])
  const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_RPC)
  var wallet = new ethers.Wallet(process.env.SECRET, provider)
  var contract = new ethers.Contract(process.env.SC_ADDRESS, abi, wallet)
  await contract.functions.addSeason(seasonID,startRelease,rewards['merkleRoot'])
  res.send(rewards)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})