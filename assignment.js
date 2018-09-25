let grades = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    add: '+',
   sub: '-',
    multiply: '*',
    divide: '/'
  }
 
  
  let one = document.querySelectorAll('button')[0]
  let two = document.querySelectorAll('button')[1]
  let three = document.querySelectorAll('button')[2]
  let four = document.querySelectorAll('button')[4]
  let five = document.querySelectorAll('button')[5]
  let six = document.querySelectorAll('button')[6]
  let seven = document.querySelectorAll('button')[8]
  let eight = document.querySelectorAll('button')[9]
  let nine = document.querySelectorAll('button')[10]
  let zero = document.querySelectorAll('button')[12]
  let add = document.querySelectorAll('button')[3]
  let sub = document.querySelectorAll('button')[7]
  let divide = document.querySelectorAll('button')[15]
  let multiply = document.querySelectorAll('button')[11]
  let calculate = document.querySelectorAll('button')[13]
  let clear = document.querySelectorAll('button')[14]
  let calc1 = grades['one']
  let calc2 = grades['two']
  let calc3 = grades['three']
  let calc4 = grades['four']
  let calc5 = grades['five']
  let calc6 = grades['six']
  let calc7 = grades['seven']
  let calc8 = grades['eight']
  let calc9 = grades['nine']
  let calc0 = grades['zero']
  let calcAdd = grades['add']
  let calcSub = grades['sub']
  let calcMultiply = grades['multiply']
  let calcDivide = grades['divide']
  
  one.onclick = function () {
     document.querySelector('input').value += calc1;
     
  }
  two.onclick = function () {
    document.querySelector('input').value+= calc2 ;
    
 }
 three.onclick = function () {
    document.querySelector('input').value += calc3;
    
 }
 four.onclick = function () {
    document.querySelector('input').value += calc4;
    
 }
 five.onclick = function () {
    document.querySelector('input').value += calc5;
    
 }
 six.onclick = function () {
    document.querySelector('input').value += calc6;
    
 }
 seven.onclick = function () {
    document.querySelector('input').value += calc7;
    
 }

eight.onclick = function () {
   document.querySelector('input').value += calc8;
   
}

nine.onclick = function () {
   document.querySelector('input').value += calc9;
   
}
zero.onclick = function () {
   document.querySelector('input').value += calc0;
   
}
add.onclick = function () {
    document.querySelector('input').value += calcAdd;
    
 }
 sub.onclick = function () {
    document.querySelector('input').value += calcSub;
    
 }
 divide.onclick = function () {
    document.querySelector('input').value += calcDivide;
    
 }
 multiply.onclick = function () {
    document.querySelector('input').value += calcMultiply;
 }
 calculate.onclick = function() {
    document.querySelector('input').value = eval(document.querySelector('input').value)
 }
 clear.onclick = function() {
  document.querySelector('input').value = ''
}   
