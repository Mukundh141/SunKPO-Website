// Setting the default to engineering
$(document).ready(function(){
    $(".engineering").addClass("active");
    $("#engineering-card-wrapper").addClass("active-card");
    $("#it-card-wrapper").addClass("deactive-card");
    //Getting the section id 
    const jobs = document.querySelector("#jobs");
    jobs.style.height = '800px';
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
        jobs.style.height = '1500px';
    }
    else{
        $(".IT").removeClass("active");
        $("#it-card-wrapper").addClass("deactive-card");
        $("#it-card-wrapper").removeClass("active-card");
        $(".engineering").addClass("active");
        $("#engineering-card-wrapper").addClass("active-card");
        $("#engineering-card-wrapper").removeClass("deactive-card");
        jobs.style.height = '800px';
    }
});

