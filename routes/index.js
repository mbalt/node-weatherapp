var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req,res){
    console.log(req);
    var city = req.query.info;
    var reqString = 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&type=accurate&APPID=ef99cd1d54bdc402ce8b8f4dc57a71df';
    
    request.get(reqString, function(err, response, body){
        if (err) throw err;
        console.log(typeof body);
        res.render('weather.jade', {'weather': JSON.parse(body)});
        
    })
    
})

module.exports = router;
