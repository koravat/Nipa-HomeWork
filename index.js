const express = require('express');
//const app = express();
const path = require('path');
const router = express.Router();

router.get('/THB', (req, res) => {
  var input = req.query;
  var a = parseInt(input.a) || 0;
  var b = input.b ;
  var result ;
  if (b ==  "USA"){
      result = a*0.032;
      res.json({THB: a+' Bath = '+result +' Dollar'});
  }
  else if (b ==  "JPY"){
    result = a*3.40;
    res.json({THB:a+' Bath = ' +result+' Yen'});
  }
  else if (b ==  "EUR"){
    result = a*0.027;
    res.json({THB:a+' Bath = '+result+' Euro'});
  }
  
});
router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/front.html'));
  });

module.exports = router;


//add the router
//app.use('/', router);
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');