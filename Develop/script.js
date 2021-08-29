
//            b3) save button to local storage  
//          C)blue tab
//  4) WHEN I refresh the page, THEN the saved events persist(local storage?)


var currentDay = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").text(currentDay);


const buttonInput = document.querySelector('.timeblock');
const text = document.querySelector('.text');
const button = document.querySelector('.savBtn');

//buttonInput.addEventListener('click', function() { 
// What am I doing wrong here? 

//localStorage.getItem('textinput', text.textContent)
