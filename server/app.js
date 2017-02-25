console.log("WORKS");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var math = {};

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



// app.get('/addition', function(req, res){
//   res.send(addition);
// });



app.post('/adderFunction', function(req, res){
    math = req.body;
    console.log(math);
    if (math.addition.type == "add") {

  var totalAddition = parseFloat(math.numberOne)+                 parseFloat(math.numberTwo);
console.log(totalAddition);
    res.send(totalAddition+ "");
  }else if
  (math.subtract.type == "subtract")

{var totalSubtract =
  parseFloat(math.numberOne)-                 parseFloat(math.numberTwo);
console.log(totalSubtract);
    res.send(totalSubtract+ "");
  }

});

app.post('/dividerFunction', function(req, res){
    math = req.body.divide;
    console.log(math);
  var totalDivide = parseFloat(math.numberOne)/                 parseFloat(math.numberTwo);
console.log(totalDivide);
    res.send(totalDivide+ "");
});

    app.post('/multiplyFunction', function(req, res){
        math = req.body.multiply;
        console.log(math);
      var totalMultiply = parseFloat(math.numberOne)*                 parseFloat(math.numberTwo);
    console.log(totalMultiply);
        res.send(totalMultiply+ "");
});





app.listen(5000);
