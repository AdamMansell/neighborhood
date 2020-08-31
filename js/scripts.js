
function Logic(givenString, goodInput, badInput, resultH3) {
  let givenNum = parseInt(givenString);
  let arrayRange = [];
  if ((/^\d+$/.test(givenNum)) === true) {
    for (i = 0; i <= givenNum; i++) {
      arrayRange.push(i);
      // $(".resulth3").text(arrayRange);
    }
    for (i = 0; i <= arrayRange.length; i++) {
      console.log(arrayRange);
      if ((/1/.test(arrayRange[i]) == true) && (/2/.test(arrayRange[i]) == false) && (/3/.test(arrayRange[i]) == false)) {
        arrayRange.splice(arrayRange[i], 1, "Beep!");
        // resultH3.text(arrayRange);
        // return arrayRange;
      } else if ((/2/.test(arrayRange[i]) == true) && (/3/.test(arrayRange[i]) == false)) {
        arrayRange.splice(arrayRange[i], 1, "Boop!");
        // resultH3.text(arrayRange);
        // return arrayRange;
      } else if (/3/.test(arrayRange[i]) == true) {
        arrayRange.splice(arrayRange[i], 1, "Won't you be my neighbor?");
        // resultH3.text(arrayRange);
        // return arrayRange;
      }
    }
    badInput.hide() && goodInput.show();
  } else {
    goodInput.hide() && badInput.show();
  }
}




$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let resultH3 = $(".resulth3");
    let givenString = $("input#range").val();
    let goodInput = $("#result");
    let badInput = $("#badResult");
    let newList = new Logic(givenString, goodInput, badInput, resultH3);
    resultH3.text(newList);



    // if ((/^\d+$/.test(givenString)) === true) {
    //   for (i = 0; i <= givenNum; i++) {
    //     arrayRange.push(i);
    //     $(".resulth3").text(arrayRange);
    //   }
    //   for (i = 0; i <= arrayRange.length; i++) {
    //     if ((/1/.test(arrayRange[i]) == true) && (/2/.test(arrayRange[i]) == false) && (/3/.test(arrayRange[i]) == false)) {
    //       arrayRange.splice(arrayRange[i], 1, "Beep!");
    //       $(".resulth3").text(arrayRange);
    //     } else if ((/2/.test(arrayRange[i]) == true) && (/3/.test(arrayRange[i]) == false)) {
    //       arrayRange.splice(arrayRange[i], 1, "Boop!");
    //       $(".resulth3").text(arrayRange);
    //     } else if (/3/.test(arrayRange[i]) == true) {
    //       arrayRange.splice(arrayRange[i], 1, "Won't you be my neighbor?");
    //       $(".resulth3").text(arrayRange);
    //     }
    //   }
    //   $("#badResult").hide();
    //   $("#result").show();
    // } else {
    // $("#result").hide();
    // $("#badResult").show();
    // }
  });
});