$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let givenString = $("input#range").val();
    let givenNum = parseInt(givenString);
    let arrayRange = [];
    for (i = 0; i <= givenNum; i++) {
      arrayRange.push(i);
      $(".resulth3").text(arrayRange);
  }
    // arrayRange.push(givenNum);
    
    $("#result").show();

    // function toArray(sentence) {
    //   if (/[1]/i.test(sentence)) {
    //     sentence += "way";
    //     return sentence;
    //   } else {
    //     return sentence;
    //   }
    // }
    // console.log(vowBegin("octopus"));
    // event.preventDefault();
  });
});