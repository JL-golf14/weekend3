console.log("WORKS");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var math = {};

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/adderFunction', function(req, res){
    math = req.body;
    console.log(math);
    if (math.type == "add") {

  var totalAddition = parseFloat(math.numberOne)+                 parseFloat(math.numberTwo);
console.log(totalAddition);
    res.send(totalAddition+ "");
  }else if
  (math.type == "subtract")

{var totalSubtract =
  parseFloat(math.numberOne)-                 parseFloat(math.numberTwo);
console.log(totalSubtract);
    res.send(totalSubtract+ "");
  }

}); //end of addition subtraction

app.post('/dividerFunction', function(req, res){
    math = req.body;
    console.log(math);
  var totalDivide =
  (math.numberOne/math.numberTwo);
console.log("divide Log" + totalDivide);
    res.send(totalDivide+ "");
}); //end of division

    app.post('/multiplyFunction', function(req, res){
        math = req.body;
        console.log(math);
      var totalMultiply = math.numberOne *               math.numberTwo;
    console.log("multiply log" + totalMultiply);
        res.send(totalMultiply+ "");
}); //end multiplication





app.listen(5000);
