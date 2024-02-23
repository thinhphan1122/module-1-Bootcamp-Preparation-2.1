function yes() {
  alert("Yeah! You better do! ");
}

function no() {
  var x = Math.round(Math.random() * window.innerWidth);
  var y = Math.round(Math.random() * window.innerHeight);
  document.getElementById("No").style.left = x + "px";
  document.getElementById("No").style.top = y + "px";
}
