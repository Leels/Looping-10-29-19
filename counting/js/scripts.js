
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();


    // business logic
    var numberOne = parseInt($("input#numberOne").val());
    var numberTwo = parseInt($("input#numberTwo").val());
    var index = 0;




    // user interface

    if (isNaN(numberOne) || isNaN(numberTwo)) {
      alert("Please Enter Real Numbers.")
    } else if (numberOne < 0 || numberTwo < 0) {
      alert("Please Enter Positive Numbers")
    } else if (numberTwo > numberOne) {
      alert("you dummy, that's wrong!")
    } else if (numberOne.length === 0 || numberTwo.length ===0){
      alert("Please Enter Numbers.")
    }  else {
      for (index = numberTwo; index <= numberOne; index += numberTwo) {
        console.log(index);
        $("#result").append(index + ", ");
        console.log(index);
      }


    }

  });
});
