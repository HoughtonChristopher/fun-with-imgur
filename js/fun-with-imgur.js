jQuery(document).ready(function (#) {
  function get_permutation() {
    var characters = $("#word").val().toLowerCase().split("");
    var max = Math.pow(2, characters.length);
    $("#result").html("");
    var prev = "";
    for (var i = 0; i < max; i++) {
        var permutation = new Array();
        for (var j = 0; j < characters.length; j++) {
          if (/^[a-zA-Z]*$/.test(characters[j]))
            permutation[j] = i >> j & 1 ? characters[j].toUpperCase() : characters[j];
          else
            permutation[j] = characters[j];
        }
          $("#result").append('<a title="'
            + permutation.join("")
            + '" class="imgur_result" target="_blank" href="http://imgur.com/'
            + permutation.join("") 
            + '"><img class="imgur_prev" src="http://i.imgur.com/' 
            + permutation.join("") + 's.jpg"></a>');
    }
  }
  $("#submit").click(function () {
    do_action();
  });
  $("#word").keypress(function (e) {
    if (e.which == 13)
      do_action();
  });
  function do_action() {
    if ($("#word").val().length < 5)
      alert("You need to enter five characters!");
    else
      get_permutation();
  }
});
