function toggleContainer1() {
  const text = document.getElementById("toggleText1");
  const button = event.target;
}

function add() {
  let x = 11;
  let y = 15;
  const sum = x + y;
  return sum;
}

function displayAdd() {
  const result = add();
  document.getElementById("plus").innerText = result;
}

function subtract(){
    let x = 40;
    let y = 10;
    return sum = x - y;   
}

function displaySubtract()
{
    document.getElementById("sub").innerHTML = subtract();
}

function multiplication(){
    let x = 5;
    let y = 3;
    return sum = x * y;   
}

function displayMultiplication()
{
    document.getElementById("cross").innerHTML = multiplication();
}

function division(){
    let num1 = 15;
    let num2 = 5;
    return sum = num1 / num2;   
}

function displayDivision()
{
    document.getElementById("slash").innerHTML = division();
}

function ControlFunc(){
    let x = 13;
    let y = 14;
    if (x > y) {
        return result = x + y;
    } else {
        return result = y - x;
    }
}

function displayIfElse()
{
    document.getElementById("con").innerHTML = ControlFunc();
}