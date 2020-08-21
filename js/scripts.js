$(document).ready(function () {
  $("#formOne").submit(function (event) {
    function vowBegin(sentence) {
      if (/[aeiou]/i.test(sentence)) {
        sentence += "way";
        return sentence;
      } else {
        return sentence;
      }
    }
    console.log(vowBegin("octopus"));
    event.preventDefault();
  });
});