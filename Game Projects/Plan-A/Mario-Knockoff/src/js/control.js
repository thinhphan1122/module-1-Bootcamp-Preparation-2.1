//Tìm mã của các nút bấm
// window.addEventListener('keydown', ({ keyCode }) => {
//   console.log(keyCode);
// })
// 65 83 68 87

//Nhận tín hiệu từ bàn phím (*keyCode is deprecated.)
let lastKey;
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case "d":
      console.log("right");
      // player.velocity.x += 1;
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case "s":
      console.log("down");
      break;

    case "w":
      console.log("up");
      player.velocity.y -= 14;
      break;
  }

  console.log(keys.right.pressed);
});

window.addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      console.log("left");
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case "d":
      console.log("right");
      // player.velocity.x += 1;
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case "s":
      console.log("down");
      break;

    case "w":
      console.log("up");
      break;
  }

  console.log(keys.right.pressed);
});
