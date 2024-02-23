let monitor = document.getElementById("monitor");
function inputValue(value) {
  monitor.value += value;
}
function result() {
  let result = eval(monitor.value);
  monitor.value = result;
}
function del() {
  monitor.value = "";
}
