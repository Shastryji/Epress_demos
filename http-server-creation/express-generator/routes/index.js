var express = require('express');
var router = express.Router();


function calculateSum(n)
{
  return (n*(n+1))/2;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req,res)=>{
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans.toString());

  res.send("hello home !");
});

module.exports = router;
