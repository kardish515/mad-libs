$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["occupation", "female-name", "location", "noun1", "noun2", "noun3", "verb-ing", "plural-noun", "verb-ing2", "location2", "verb"]
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    $("#story").show();
    event.preventDefault();
  });
});
