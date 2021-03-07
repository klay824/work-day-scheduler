// global variables
var saveBtn = document.querySelector(".saveBtn");


// current day timestamp
var currentDay = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDay);

// depending on time of day, background of hour will be gray (past), red (current), or green (future)
var currentTime = moment().hour();
console.log(currentTime);

function timeColors () {
    if(currentTime >= 4) {
        $("#input9").addClass("present");
    }
}

