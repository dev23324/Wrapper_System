var express = require('express');
var router = express.Router();
var bitcoin_rpc = require('node-bitcoin-rpc')

/* GET home page. */
router.get('/', function(req, res, next) {

  

  bitcoin_rpc.init('192.169.153.139', '18332', 'Ken111', 'asdfghjkl890ASDFGHJKL111')
  bitcoin_rpc.call('getnewaddress', [], function (err, result) {
    if (err !== null) {
      console.log('I have an error');
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ address:  "error"}));
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ address:  result.result}));
    }
  })

  //res.render('index', { title: 'Express' });
  
});

router.get('/getNewAddress', function(req, res, next) {

  

  bitcoin_rpc.init('192.169.153.139', '18332', 'Ken111', 'asdfghjkl890ASDFGHJKL111')
  bitcoin_rpc.call('getnewaddress', [], function (err, result) {
    if (err !== null) {
      console.log('I have an error');
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ address:  "error"}));
    } else {
      console.log('Yay! I need to do whatevere now with ' + result.result)
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ address:  result.result}));
    }
  })

  //res.render('index', { title: 'Express' });
  
});

module.exports = router;
