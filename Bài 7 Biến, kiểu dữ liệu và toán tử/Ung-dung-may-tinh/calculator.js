function add() {
  let so1 = document.getElementById("so1").value;
  let so2 = document.getElementById("so2").value;
  let Result = Number(so1) + Number(so2);
  document.getElementById("Result").innerHTML = Result;
}

function sub() {
  let so1 = document.getElementById("so1").value;
  let so2 = document.getElementById("so2").value;
  let Result = Number(so1) - Number(so2);
  document.getElementById("Result").innerHTML = Result;
}

function multi() {
  let so1 = document.getElementById("so1").value;
  let so2 = document.getElementById("so2").value;
  let Result = Number(so1) * Number(so2);
  document.getElementById("Result").innerHTML = Result;
}

function div() {
  let so1 = document.getElementById("so1").value;
  let so2 = document.getElementById("so2").value;
  let Result = Number(so1) / Number(so2);
  document.getElementById("Result").innerHTML = Result;
}
