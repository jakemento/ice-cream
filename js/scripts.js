$(document).ready(function() {

  $("#flavors").click(function(event){
    var flavors = ["vanilla", "chocolate", "pistachio", "rocky-road"];
    flavors.forEach(function(flavor) {
        $("ol").append("<li>" + flavor + "</li>");

      });

  event.preventDefault();

  });

});
