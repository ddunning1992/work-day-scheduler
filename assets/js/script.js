var todaysDate = moment();
var calenderReadout = document.querySelector("#currentDay");
var rows = document.getElementsByClassName("planner-box");
var currentHour = parseInt(moment().format('H'));
var nine = localStorage.getItem("nine");
var nineBody = document.getElementById("9");
var ten = localStorage.getItem("ten");
var tenBody = document.getElementById("10");
var eleven = localStorage.getItem("eleven");
var elevenBody = document.getElementById("11");
var twelve = localStorage.getItem("twelve");
var twelveBody = document.getElementById("12");
var thirteen = localStorage.getItem("thirteen");
var thirteenBody = document.getElementById("13");
var fourteen = localStorage.getItem("fourteen");
var fourteenBody = document.getElementById("14");
var fifteen = localStorage.getItem("fifteen");
var fifteenBody = document.getElementById("15");
var sixteen = localStorage.getItem("sixteen");
var sixteenBody = document.getElementById("16");
var seventeen = localStorage.getItem("seventeen");
var seventeenBody = document.getElementById("17");

Array.from(rows).forEach(row => {
  var
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      changeColor(row, "#ff6961");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 9)) {
      changeColor(row, "#77dd77");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 9)) {
      changeColor(row, "#d3d3d3");
    } else {
        changeColor(row, "#77dd77");
    }
  }
});

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

$(document).ready(function() {
    $("#saveBtn9").on("click", function() {
        var nine = $("#9").html();
        localStorage.setItem("nine", nine);
    });
});

$(document).ready(function() {
    $("#saveBtn10").on("click", function() {
        var ten = $("#10").html();
        localStorage.setItem("ten", ten);
    });
});

$(document).ready(function() {
    $("#saveBtn11").on("click", function() {
        var eleven = $("#11").html();
        localStorage.setItem("eleven", eleven);
    });
});

$(document).ready(function() {
    $("#saveBtn12").on("click", function() {
        var twelve = $("#12").html();
        localStorage.setItem("twelve", twelve);
    });
});

$(document).ready(function() {
    $("#saveBtn13").on("click", function() {
        var thirteen = $("#13").html();
        localStorage.setItem("thirteen", thirteen);
    });
});

$(document).ready(function() {
    $("#saveBtn14").on("click", function() {
        var fourteen = $("#14").html();
        localStorage.setItem("fourteen", fourteen);
    });
});

$(document).ready(function() {
    $("#saveBtn15").on("click", function() {
        var fifteen = $("#15").html();
        localStorage.setItem("fifteen", fifteen);
    });
});

$(document).ready(function() {
    $("#saveBtn16").on("click", function() {
        var sixteen = $("#16").html();
        localStorage.setItem("sixteen", sixteen);
    });
});

$(document).ready(function() {
    $("#saveBtn17").on("click", function() {
        var seventeen = $("#17").html();
        localStorage.setItem("seventeen", seventeen);
    });
});

function loadSchedule() {
    nineBody.innerHTML = localStorage.getItem("nine");
    tenBody.innerHTML = localStorage.getItem("ten");
    elevenBody.innerHTML = localStorage.getItem("eleven");
    twelveBody.innerHTML = localStorage.getItem("twelve");
    thirteenBody.innerHTML = localStorage.getItem("thirteen");
    fourteenBody.innerHTML = localStorage.getItem("fourteen");
    fifteenBody.innerHTML = localStorage.getItem("fifteen");
    sixteenBody.innerHTML = localStorage.getItem("sixteen");
    seventeenBody.innerHTML = localStorage.getItem("seventeen");
};

loadSchedule();

calenderReadout.textContent = todaysDate.format("dddd, MMM DD, YYYY");