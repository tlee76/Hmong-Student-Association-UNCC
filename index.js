$(document).ready(function() {



//calling json file to load mission statement at bottom of home page
$.ajax({
    type: "get",
    url: "paragraphs.json",
    beforeSend: function() {
        $("#ourMission").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data) {
        $("#ourMission").html("");
        $.each(data, function() {
            $.each(this, function(key, value) {
          $("#ourMission").append(
                "<h1 class=display-4>" + value.name + "</h1>" + 

                "<hr>" +

                "<p>" + value.text + "</p>"
    
          );
        });
    });

    }
});





    
 $(".youtube-link").grtyoutube();  //youtube popup jquery plugin 



 
    //tooltip for navbar and footer
    $(document).tooltip();



});

