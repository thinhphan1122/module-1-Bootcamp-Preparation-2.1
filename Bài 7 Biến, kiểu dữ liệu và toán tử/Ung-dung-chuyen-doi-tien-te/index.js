function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (from == "VND" && to == "USD") {
    result = "result: " + amount / 23000 + " USD";
  } else if (from == "USD" && to == "VND") {
    result = "result: " + amount * 23000 + " VND";
  } else if (from == "USD") {
    result = "result: " + amount + " USD";
  } else {
    result = "result: " + amount + " VND";
  }

  document.getElementById("result").innerHTML = result;
}
