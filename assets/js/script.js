// global variables
var saveBtn = document.querySelector(".saveBtn");


// current day timestamp
var currentDay = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDay);

// depending on time of day, background of hour will be gray (past), red (current), or green (future)
var currentTime = moment().hour();

// function to change textarea background color depending on time of day
function timeColors () {
    // gray if 9am is in the past
    if(currentTime > 9) {
        $("#input9").addClass("past");
    } 
    
    // red if the current hour is 9am
    if (currentTime == 9) {
        $("#input9").addClass("present");
    } 
    
    // green if 9am is in the future
    if (currentTime < 9) {
        $("#input9").addClass("future");
    }

    // gray if 10am is in the past
    if(currentTime > 10) {
        $("#input10").addClass("past");
    }

    // red if 10am is the current hour
    if(currentTime == 10) {
        $("#input10").addClass("present");
    }

    // green if 10am is in the future
    if(currentTime < 10) {
        $("#input10").addClass("future");
    }

    // gray if 11am is in the past
    if(currentTime > 11) {
        $("#input11").addClass("past");
    }

    // red if 11am is the current hour
    if(currentTime == 11) {
        $("#input11").addClass("present");
    }

    // green if 11am is in the future
    if(currentTime < 11) {
        $("#input11").addClass("future");
    }

    // gray if 12pm is in the past
    if(currentTime > 12) {
        $("#input12").addClass("past");
    }

    // red if 12pm is the current time
    if(currentTime == 12) {
        $("#input12").addClass("present");
    }

    // green if 12pm is in the future
    if(currentTime < 12) {
        $("#input12").addClass("future");
    }

    // gray if 1pm is in the past
    if(currentTime > 13) { /*13 because this is a 24 hour clock */
        $("#input1").addClass("past");
    }

    // red if 1pm is the current hour
    if(currentTime == 13) {
        $("#input1").addClass("present");
    }

    // green if 1pm is in the future
    if(currentTime < 13) {
        $("#input1").addClass("future");
    }

    // gray if 2pm is in the past
    if(currentTime > 14) {
        $("#input2").addClass("past");
    }

    // red if 2pm is the current hour
    if(currentTime == 14) {
        $("#input2").addClass("present");
    }

    // green if 2pm is in the future
    if(currentTime < 14) {
        $("#input2").addClass("future");
    }

    // gray if 3pm is in the past
    if(currentTime > 15) {
        $("#input3").addClass("past");
    }

    // red if 3pm is the current hour
    if(currentTime == 15) {
        $("#input3").addClass("present");
    }

    // green if 3pm is in the future
    if(currentTime < 15) {
        $("#input3").addClass("future");
    }

    // gray if 4pm is in the past
    if(currentTime > 16) {
        $("#input4").addClass("past");
    }

    // red if 4pm is the current hour
    if(currentTime == 16) {
        $("#input4").addClass("present");
    }

    // green if 4pm is in the future
    if(currentTime < 16) {
        $("#input4").addClass("future");
    }

    // gray if 5pm is in the past
    if(currentTime > 17) {
        $("#input5").addClass("past");
    }

    // red if 5pm is the current hour
    if(currentTime == 17) {
        $("#input5").addClass("present");
    }

    // green if 5pm is in the future
    if(currentTime < 17) {
        $("#input5").addClass("future");
    }
}

timeColors();