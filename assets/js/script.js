// global variables
var saveBtn = document.querySelector(".saveBtn");


// current day timestamp
var currentDay = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDay);

// depending on time of day, background of hour will be gray (past), red (current), or green (future)
var currentTime = moment().hour();
console.log(typeof currentTime);

function timeColors () {
    if(currentTime > 9) {
        $("#input9").addClass("past");
    } else if (currentTime === 9) {
        $("#input9").addClass("present")
    } else if (currentTime < 9) {
        $("#input9").addClass("future")
    }
    
}

timeColors();