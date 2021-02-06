// Setting the default to engineering
$(document).ready(function () {
  $(".engineering").addClass("active");
  $("#engineering-card-wrapper").addClass("active-card");
  $("#it-card-wrapper").addClass("deactive-card");
  //Getting the section id
  const jobs = document.querySelector("#jobs");
  let deviceWidth = screen.width;
  console.log("The device width is " + deviceWidth);
  //Function to set the initial Jobs section heigth
  function setJobsHeight(a) {
    jobs.style.height = a + "px";
    console.log("This is the height of the jobs section " + jobs.style.height);
  }
  //Function to check with range the screen width falls in for engineering
  function setEngineering(a) {
    if (a <= 500) {
      console.log("This is a mobile device");
      setJobsHeight(1100);
    } else if (a > 500 && a <= 1000) {
      console.log("This is a small tablet");
      setJobsHeight(1100);
    } else if (a > 1000 && a <= 1199) {
      console.log("This is a large tablet");
      setJobsHeight(1500);
    } else if (a > 1199 && a <= 1400) {
      console.log("This is a small laptop");
      setJobsHeight(700);
    } else if (a > 1400 && a <= 1600) {
      console.log("This is a large laptop");
      setJobsHeight(700);
    } else {
      console.log("This is a monitor");
      setJobsHeight(900);
    }
  }
  //Function to check with range the screen width falls in for IT
  function setIT(a) {
    if (a <= 500) {
      console.log("This is a mobile device");
      setJobsHeight(2700);
    } else if (a > 500 && a <= 1000) {
      console.log("This is a small tablet");
      setJobsHeight(2450);
    } else if (a > 1000 && a <= 1199) {
      console.log("This is a large tablet");
      setJobsHeight(3200);
    } else if (a > 1199 && a <= 1400) {
      console.log("This is a small laptop");
      setJobsHeight(1450);
    } else if (a > 1400 && a <= 1600) {
      console.log("This is a large laptop");
      setJobsHeight(1500);
    } else {
      console.log("This is a monitor");
      setJobsHeight(1500);
    }
  }
  //Call the check screen function on load
  setEngineering(deviceWidth);

  // Get the class name of the h3 element when clicked
  $("h3").click(function () {
    var className = $(this).attr("class");
    if (className == "IT") {
      $(".IT").addClass("active");
      $("#it-card-wrapper").addClass("active-card");
      $("#it-card-wrapper").removeClass("deactive-card");
      $(".engineering").removeClass("active");
      $("#engineering-card-wrapper").addClass("deactive-card");
      $("#engineering-card-wrapper").removeClass("active-card");
      setIT(deviceWidth);
    } else {
      $(".IT").removeClass("active");
      $("#it-card-wrapper").addClass("deactive-card");
      $("#it-card-wrapper").removeClass("active-card");
      $(".engineering").addClass("active");
      $("#engineering-card-wrapper").addClass("active-card");
      $("#engineering-card-wrapper").removeClass("deactive-card");
      setEngineering(deviceWidth);
    }
  });
});
