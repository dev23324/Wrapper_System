var express = require('express');
var router = express.Router();

var bitcoin_rpc = require('node-bitcoin-rpc')

bitcoin_rpc.init('localhost', '18332', 'Ken111', 'asdfghjkl890ASDFGHJKL111');
/* GET home page. */
router.post('/', function(req, res, next) {

});

router.post('/getNewAddress', function(req, res, next) {

  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  
  bitcoin_rpc.call('getnewaddress', [], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ type: 0, ethAddress: req.body.ethAddress, btcAddress:  result.result}));
    }
  })
});
  
router.post('/getBalance', function(req, res, next) {
  
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.body.btcAddress);
  bitcoin_rpc.call('getreceivedbyaddress', [req.body.btcAddress, req.body.minConf], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
          res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ type: 1, ethAddress: req.body.ethAddress, btcBalance:  result.result}));
    }
  })
});

router.post('/withdrawBTC', function(req, res, next) {
  
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.body.btcAddress);
  bitcoin_rpc.call('getreceivedbyaddress', [req.body.btcAddress, req.body.minConf], function (err, result) {
    if (err !== null) {
      console.log('I have an error :( ' + err + ' ' + result.error)
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
          res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ type: 2, ethAddress: req.body.ethAddress, btcBalance:  result.result}));
    }
  })
});

module.exports = router;