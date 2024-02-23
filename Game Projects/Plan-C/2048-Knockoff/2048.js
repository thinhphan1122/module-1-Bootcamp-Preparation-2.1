var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //Tạo thẻ div với id = "0-0"
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = ""; //clear the classList
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num.toString();
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
}

//Tạo 1 function để update các ô khi chúng di chuyển
function updateTile(tile, num) {
  tile.innerText = "";
  tile.classlist.value = ""; //Làm sạch danh sách các lớp vd: x2, x4, x8, etc.
  tile.classlist.add("title");
  if (num > 0) {
    tile.innerText = num;
    if (num <=4096) {
      tile.classlist.add("x" + num.toString());
    } else {
      tile.classlist.add("x8192");
    }
  }
}

