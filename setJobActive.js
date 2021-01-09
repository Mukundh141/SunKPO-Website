// Setting the default to engineering
$(document).ready(function(){
    $(".engineering").addClass("active");
    $("#engineering-card-wrapper").addClass("active-card");
    $("#it-card-wrapper").addClass("deactive-card");
});



// Get the class name of the h3 element when clicked
$("h3").click(function() {
    var className = $(this).attr("class");
    if (className == "IT"){
        $(".IT").addClass("active");
        $("#it-card-wrapper").addClass("active-card");
        $("#it-card-wrapper").removeClass("deactive-card");
        $(".engineering").removeClass("active");
        $("#engineering-card-wrapper").addClass("deactive-card");
        $("#engineering-card-wrapper").removeClass("active-card");
    }
    else{
        $(".IT").removeClass("active");
        $("#it-card-wrapper").addClass("deactive-card");
        $("#it-card-wrapper").removeClass("active-card");
        $(".engineering").addClass("active");
        $("#engineering-card-wrapper").addClass("active-card");
        $("#engineering-card-wrapper").removeClass("deactive-card");
    }
});

