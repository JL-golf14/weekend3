var clientInputs = {};
$(document).ready(function(){
  console.log("JQUERY GOOD");


  $(".addButton").on('click', function(){
    clientInputs.numberOne = $("#firstNumber").val();
    clientInputs.numberTwo = $("#secondNumber").val();
    clientInputs.type = "add";
    console.log(clientInputs);
    poster();
  });

  $(".subtractButton").on('click', function(){
    clientInputs.numberOne = $("#firstNumber").val();
    clientInputs.numberTwo = $("#secondNumber").val();
    clientInputs.type = "subtract";
    console.log(clientInputs);
    poster();
  });

  $(".multiplyButton").on('click', function(){
    clientInputs.numberOne = $("#firstNumber").val();
    clientInputs.numberTwo = $("#secondNumber").val();
    clientInputs.type = "multiply";
    console.log(clientInputs);
    multiplyAjaxFun();
  });

  $(".divideButton").on('click', function(){
    clientInputs.numberOne = $("#firstNumber").val();
    clientInputs.numberTwo = $("#secondNumber").val();
    clientInputs.type = "divide";
    divideAjaxFun();
    console.log(clientInputs);
  });


  $("#clear").on('click', function(){
      $('h2').text('');
      $('input[type="number"], textarea').val('');
    console.log("clear clicked");
  });

  function poster(){
    $.ajax({
      type: 'POST',
      url: '/adderFunction/',
      // data: $("#newFishName").val(); can be written like this
      data: clientInputs,
      success: function(response){
        console.log("this on",response);
        $('#answer').append(response+'<br>');
      }  //closes success post
    }); //closes ajax post
  };// closes poster function


  function multiplyAjaxFun(){
    $.ajax({
      type: 'POST',
      url: '/multiplyFunction',
      data: clientInputs,
      success: function(response){
        console.log("this on",response);
        $('#answer').append(response+'<br>');
      }  //closes success post
    }); //closes ajax post
  };// closes multiplyFunction

  function divideAjaxFun(){
    $.ajax({
      type: 'POST',
      url: '/dividerFunction',
      data: clientInputs,
      success: function(response){
        console.log("this on",response);
        $('#answer').append(response+'<br>');
      }  //closes success post
    }); //closes ajax post
  };// closes divider function

});
