// function changeImg1(image) {
//   image.src = "green.png";
// }

var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");

function changeImg1() {
  if (image1.getAttribute("src") == "red.png") {
    image1.src = "green.png";
  } else if (image1.getAttribute("src") == "green.png") {
    image1.src = "blue.png";
  } else {
    image1.src = "red.png";
  }
}

function changeImg2() {
  if (image2.getAttribute("src") == "green.png") {
    image2.src = "blue.png";
  } else if (image2.getAttribute("src") == "blue.png") {
    image2.src = "red.png";
  } else {
    image2.src = "green.png";
  }
}

function changeImg3() {
  if (image3.getAttribute("src") == "blue.png") {
    image3.src = "red.png";
  } else if (image3.getAttribute("src") == "red.png") {
    image3.src = "green.png";
  } else {
    image3.src = "blue.png";
  }
}

// Cần làm cho chương trình tự động hiện cửa sổ alert khi 3 hình giống nhau
// Test nút function checkColors

// function checkColors() {
//   if (image1.getAttribute("src") == image2.getAttribute("src")) {
//     if (image1.getAttribute("src") == image3.getAttribute("src")) {
//       alert("Correct!");
//     }
//   } else alert("False!");
// }

function checkColors() {
  if (
    image1.getAttribute("src") == image2.getAttribute("src") &&
    image1.getAttribute("src") == image3.getAttribute("src")
  ) {
    alert("Correct!");
  } else alert("False!");
}
