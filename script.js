//Creates the current date & time
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

//Determines current hour
var currentHour = moment().hour();
var timeColor;


var hourID = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (var i = 0; i < hour.length; i++) {
  if (hourID[i] > currentHour) {
    timeColor = "future";
  } else if (hourID[i] === currentHour) {
    timeColor = "present";
  } else {
    timeColor = "past";
  }
};

function saveText(){
  var userInput = $(this).siblings(".description").val();
  var hourOfInput = $(this).siblings(".hour").text();
      console.log(userInput);
      console.log(hourOfInput);
  
  localStorage.setItem(hourOfInput, userInput);
};

$(".saveBtn").on("click", saveText);


