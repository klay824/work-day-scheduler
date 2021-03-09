// if there are tasks in local storage, they will be written to their time slot upon refresh
window.onload = write9am(), write10am(), write11am(), write12pm(), write1pm(), write2pm(), write3pm(), write4pm(), write5pm();

// global variables
var input9 = document.querySelector("#input9");
var input10 = document.querySelector("#input10");
var input11 = document.querySelector("#input11");
var input12 = document.querySelector("#input12");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var input4 = document.querySelector("#input4");
var input5 = document.querySelector("#input5");


// current day timestamp
var currentDay = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDay);

// sets the current hour equal to currentTime variable
var currentTime = moment().hour();


// // Trying alternate method to change time block colors
// $(".time-block").each(function() {
//     var currentElement = $("id");
//     console.log(currentElement);
// })

// function to change textarea background color depending on time of day
function timeColors () {
    // 9am
    if(currentTime > 9) {
        $("#input9").addClass("past");
    } else if (currentTime == 9) {
        $("#input9").addClass("present");
    } else {
        $("#input9").addClass("future");
    }
    
    // 10am
    if(currentTime > 10) {
        $("#input10").addClass("past");
    } else if (currentTime == 10) {
        $("#input10").addClass("present");
    } else {
        $("#input10").addClass("future");
    }
    
    // 11am
    if(currentTime > 11) {
        $("#input11").addClass("past");
    } else if (currentTime == 11) {
        $("#input11").addClass("present");
    } else {
        $("#input11").addClass("future");
    }

    // 12pm
    if(currentTime > 12) {
        $("#input12").addClass("past");
    } else if (currentTime == 12) {
        $("#input12").addClass("present");
    } else {
        $("#input12").addClass("future");
    }

    // 1pm
    if(currentTime > 13) { /*13 because this is a 24 hour clock */
        $("#input1").addClass("past");
    } else if (currentTime == 13) {
        $("#input1").addClass("present");
    } else {
        $("#input1").addClass("future");
    }

    // 2pm
    if(currentTime > 14) {
        $("#input2").addClass("past");
    } else if (currentTime == 14) {
        $("#input2").addClass("present");
    } else {
        $("#input2").addClass("future");
    }

    // 3pm
    if(currentTime > 15) {
        $("#input3").addClass("past");
    } else if (currentTime == 15) {
        $("#input3").addClass("present");
    } else {
        $("#input3").addClass("future");
    }

    // 4pm
    if(currentTime > 16) {
        $("#input4").addClass("past");
    } else if (currentTime == 16) {
        $("#input4").addClass("present");
    } else {
        $("#input4").addClass("future");
    }

    // 5pm
    if(currentTime > 17) {
        $("#input5").addClass("past");
    } else if (currentTime == 17) {
        $("#input5").addClass("present");
    } else {
        $("#input5").addClass("future");
    }
}

timeColors();


// 9am saving to local storage
function save9AM () {  
    localStorage.setItem("task9", JSON.stringify(input9.value));
}

// to write to the text area from local storage
function write9am () {
    var saveTask9 = JSON.parse(localStorage.getItem("task9"));
    $("#input9").val(saveTask9);
}

// saves 9am task to local storage
$(".saveBtn9").click(save9AM);
$(".saveBtn9").click(write9am);


// 10am saving to local storage
function save10AM () {
    localStorage.setItem("task10", JSON.stringify(input10.value));
}

// to write to the text area from local storage
function write10am () {
    var saveTask10 = JSON.parse(localStorage.getItem("task10"));
    $("#input10").val(saveTask10);
}

$(".saveBtn10").click(save10AM);
$(".saveBtn10").click(write10am);


// 11am saving to local storage
function save11AM () {
    localStorage.setItem("task11", JSON.stringify(input11.value));
}

// to write to the text area from local storage
function write11am () {
    var saveTask11 = JSON.parse(localStorage.getItem("task11"));
    $("#input11").val(saveTask11);
}

$(".saveBtn11").click(save11AM);
$(".saveBtn11").click(write11am);

    
    
// 12pm saving to local storage
function save12PM () {
    localStorage.setItem("task12", JSON.stringify(input12.value));
}

// to write to the text area from local storage
function write12pm () {
    var saveTask12 = JSON.parse(localStorage.getItem("task12"));
    $("#input12").val(saveTask12);
}

$(".saveBtn12").click(save12PM);
$(".saveBtn12").click(write12pm);



// 1pm saving to local storage
function save1PM () {
    localStorage.setItem("task1", JSON.stringify(input1.value));
}

// to write to the text area from local storage
function write1pm () {
    var saveTask1 = JSON.parse(localStorage.getItem("task1"));
    $("#input1").val(saveTask1);
}

$(".saveBtn1").click(save1PM);
$(".saveBtn1").click(write1pm);
  

// 2pm saving to local storage
function save2PM () {
    localStorage.setItem("task2", JSON.stringify(input2.value));
}

// to write to the text area from local storage
function write2pm () {
    var saveTask2 = JSON.parse(localStorage.getItem("task2"));
    $("#input2").val(saveTask2);
}

$(".saveBtn2").click(save2PM);
$(".saveBtn2").click(write2pm);
    

// 3pm saving to local storage
function save3PM () {
    localStorage.setItem("task3", JSON.stringify(input3.value));
}

// to write to the text area from local storage
function write3pm () {
    var saveTask3 = JSON.parse(localStorage.getItem("task3"));
    $("#input3").val(saveTask3);
}

$(".saveBtn3").click(save3PM);
$(".saveBtn3").click(write3pm);
    

// 4pm saving to local storage
function save4PM () {
    localStorage.setItem("task4", JSON.stringify(input4.value));
}

// to write to the text area from local storage
function write4pm () {
    var saveTask4 = JSON.parse(localStorage.getItem("task4"));
    $("#input4").val(saveTask4);
}

$(".saveBtn4").click(save4PM);
$(".saveBtn4").click(write4pm);
  

// 5pm saving to local storage
function save5PM () {
    localStorage.setItem("task5", JSON.stringify(input5.value));
}

// to write to the text area from local storage
function write5pm () {
    var saveTask5 = JSON.parse(localStorage.getItem("task5"));
    $("#input5").val(saveTask5);
}

$(".saveBtn5").click(save5PM);
$(".saveBtn5").click(write5pm);
    

function clearSchedule () {
    localStorage.clear();
    location.reload();
}

$("#clear").click(clearSchedule);