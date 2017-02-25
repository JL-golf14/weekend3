var addition = {};
var subtract = {};
  var multiply = {};
    var divide = {};
    var math = {addition,subtract,multiply,divide}
$(document).ready(function(){
  console.log("JQUERY GOOD");
  // function addition(){

    // $.ajax({
    //   type: 'GET',
    //   url: '/addition',
    //   success: function(response) {
    //     console.log('response', response);
    //         }
    //
    // });  //closes ajax
    //



  $(".addButton").on('click', function(){
    addition.numberOne = $("#firstNumber").val();
    addition.numberTwo = $("#secondNumber").val();
    addition.type = "add";
    console.log(addition);
    poster();
  });
    $(".subtractButton").on('click', function(){
      subtract.numberOne = $("#firstNumber").val();
      subtract.numberTwo = $("#secondNumber").val();
      subtract.type = "subtract";
      console.log(subtract);
      poster();
    });
      $("#multiplyButton").on('click', function(){
        multiply.numberOne = $("#firstNumber").val();
        multiply.numberTwo = $("#secondNumber").val();
        multiply.type = "multiply";
      });
        $("#divideButton").on('click', function(){
          divide.numberOne = $("#firstNumber").val();
          divide.numberTwo = $("#secondNumber").val();
          divide.type = "divide";
        });


function poster(){
    $.ajax({
      type: 'POST',
      url: '/adderFunction/',
      // data: $("#newFishName").val(); can be written like this
      data: math,  /// this becomes req.body
      success: function(response){
        console.log("this on",response);
        $('#answer').append(response+'<br>');
      }  //closes success post
}); //closes ajax post
};// closes poster function

  });
