var grades = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 0,
  }
  let option1 = document.querySelectorAll('select')[1];
  let option2 = document.querySelectorAll('select')[3];
  let option3 = document.querySelectorAll('select')[5];
  let option4 = document.querySelectorAll('select')[7];
  let option5 = document.querySelectorAll('select')[9];
  let option6 = document.querySelectorAll('select')[11];
  let calculate = document.querySelector('button');
  let display = document.querySelector('p')
  let subject1 = document.querySelectorAll('select')[0]
  let subject2 = document.querySelectorAll('select')[2]
  let subject3 = document.querySelectorAll('select')[4]
  let subject4 = document.querySelectorAll('select')[6]
  let subject5 = document.querySelectorAll('select')[8]
  let subject6 = document.querySelectorAll('select')[10]
  calculate.onclick = function () {
    let subjects1 = subject1.value
    let subjects2 = subject2.value
    let subjects3 = subject3.value
    let subjects4 = subject4.value
    let subjects5 = subject5.value
    let subjects6 = subject6.value
    let selectedSubj = [subjects1, subjects2, subjects3, subjects4, subjects5, subjects6]
    var repeatedSubj = selectedSubj.filter(function (item, index, arr) { 
      if (arr.lastIndexOf(item) === index) {
          return false;
      } else {
          return true;
  }
});

if (repeatedSubj.length > 0) alert('You repeated subjects');

    let grade1 = option1.value;
    let grade2 = option2.value;
    let grade3 = option3.value;
    let grade4 = option4.value;
    let grade5 = option5.value;
    let grade6 = option6.value;
    let score = grades[grade1] + grades[grade2] + grades[grade3] + grades[grade4] + grades[grade5] + grades[grade6];
    display.textContent = 'Your total score is ' + score;
    
  }
  