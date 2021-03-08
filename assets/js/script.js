window.onload = write9am(), write10am(), write11am(), write12pm(), write1pm(), write2pm(), write3pm(), write4pm(), write5pm();

// global variables
var saveBtn9 = document.querySelector(".saveBtn9");
var saveBtn10 = document.querySelector(".saveBtn10");
var saveBtn11 = document.querySelector(".saveBtn11");
var saveBtn12 = document.querySelector(".saveBtn12");
var saveBtn1 = document.querySelector(".saveBtn1");
var saveBtn2 = document.querySelector(".saveBtn2");
var saveBtn3 = document.querySelector(".saveBtn3");
var saveBtn4 = document.querySelector(".saveBtn4");
var saveBtn5 = document.querySelector(".saveBtn5");

var input9 = document.querySelector("#input9");
var input10 = document.querySelector("#input10");
var input11 = document.querySelector("#input11");
var input12 = document.querySelector("#input12");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var input4 = document.querySelector("#input4");
var input5 = document.querySelector("#input5");

var task9 = [];
var task10 = [];
var task11 = [];
var task12 = [];
var task1 = [];
var task2 = [];
var task3 = [];
var task4 = [];
var task5 = [];



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


// 9am saving to local storage
function save9AM () {    
    localStorage.setItem("task9", JSON.stringify(task9));
}

// to write to the text area from local storage
function write9am () {
    var saveTask9 = JSON.parse(localStorage.getItem("task9"));
    $("#input9").val(saveTask9);
}

saveBtn9.addEventListener("click", function(){
    
    var taskText9 = input9.value.trim();

    if(taskText9 === "") {
        return;
    }

    task9.push(taskText9);
    input9.value = "";

    

    save9AM();
    write9am();
});

// 10am saving to local storage
function save10AM () {
    localStorage.setItem("task10", JSON.stringify(task10));
}

// to write to the text area from local storage
function write10am () {
    var saveTask10 = JSON.parse(localStorage.getItem("task10"));
    $("#input10").val(saveTask10);
}

saveBtn10.addEventListener("click", function() {
    
    var taskText10 = input10.value.trim();

    if(taskText10 === "") {
        return;
    }

    task10.push(taskText10);
    input10.value = "";

    save10AM();
    write10am();
})

// 11am saving to local storage
function save11AM () {
    localStorage.setItem("task11", JSON.stringify(task11));
}

// to write to the text area from local storage
function write11am () {
    var saveTask11 = JSON.parse(localStorage.getItem("task11"));
    $("#input11").val(saveTask11);
}

saveBtn11.addEventListener("click", function() {
    
    var taskText11 = input11.value.trim();

    if(taskText11 === "") {
        return;
    }

    task11.push(taskText11);
    input11.value = "";

    save11AM();
    write11am();
})

// 12pm saving to local storage
function save12PM () {
    localStorage.setItem("task12", JSON.stringify(task12));
}

// to write to the text area from local storage
function write12pm () {
    var saveTask12 = JSON.parse(localStorage.getItem("task12"));
    $("#input12").val(saveTask12);
}

saveBtn12.addEventListener("click", function() {
    
    var taskText12 = input12.value.trim();

    if(taskText12 === "") {
        return;
    }

    task12.push(taskText12);
    input12.value = "";

    save12PM();
    write12pm();
})

// 1pm saving to local storage
function save1PM () {
    localStorage.setItem("task1", JSON.stringify(task1));
}

// to write to the text area from local storage
function write1pm () {
    var saveTask1 = JSON.parse(localStorage.getItem("task1"));
    $("#input1").val(saveTask1);
}

saveBtn1.addEventListener("click", function() {
    
    var taskText1 = input1.value.trim();

    if(taskText1 === "") {
        return;
    }

    task1.push(taskText1);
    input1.value = "";

    save1PM();
    write1pm();
})

// 2pm saving to local storage
function save2PM () {
    localStorage.setItem("task2", JSON.stringify(task2));
}

// to write to the text area from local storage
function write2pm () {
    var saveTask2 = JSON.parse(localStorage.getItem("task2"));
    $("#input2").val(saveTask2);
}

saveBtn2.addEventListener("click", function() {
    
    var taskText2 = input2.value.trim();

    if(taskText2 === "") {
        return;
    }

    task2.push(taskText2);
    input2.value = "";

    save2PM();
    write2pm();
})

// 3pm saving to local storage
function save3PM () {
    localStorage.setItem("task3", JSON.stringify(task3));
}

// to write to the text area from local storage
function write3pm () {
    var saveTask3 = JSON.parse(localStorage.getItem("task3"));
    $("#input3").val(saveTask3);
}

saveBtn3.addEventListener("click", function() {
    
    var taskText3 = input3.value.trim();

    if(taskText3 === "") {
        return;
    }

    task3.push(taskText3);
    input3.value = "";

    save3PM();
    write3pm();
})

// 4pm saving to local storage
function save4PM () {
    localStorage.setItem("task4", JSON.stringify(task4));
}

// to write to the text area from local storage
function write4pm () {
    var saveTask4 = JSON.parse(localStorage.getItem("task4"));
    $("#input4").val(saveTask4);
}

saveBtn4.addEventListener("click", function() {
    
    var taskText4 = input4.value.trim();

    if(taskText4 === "") {
        return;
    }

    task4.push(taskText4);
    input4.value = "";

    save4PM();
    write4pm();
})

// 5pm saving to local storage
function save5PM () {
    localStorage.setItem("task5", JSON.stringify(task5));
}

// to write to the text area from local storage
function write5pm () {
    var saveTask5 = JSON.parse(localStorage.getItem("task5"));
    $("#input5").val(saveTask5);
}

saveBtn5.addEventListener("click", function() {
    
    var taskText5 = input5.value.trim();

    if(taskText5 === "") {
        return;
    }

    task5.push(taskText5);
    input5.value = "";

    save5PM();
    write5pm();
})