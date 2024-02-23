function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (from == "feet" && to == "meter") {
    result = "result: " + amount * 0.305 + " Meter";
  } else if (from == "meter" && to == "feet") {
    result = "result: " + amount * 3.279 + " Feet";
  } else if (from == "meter") {
    result = "result: " + amount + " meter";
  } else {
    result = "result: " + amount + " feet";
  }

  document.getElementById("result").innerHTML = result;
}
