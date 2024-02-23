//Import ảnh
function importImage(imageUrl) {
  const image = new Image();
  image.src = imageUrl;

  return image;
}

let backgroundImage = importImage("src/img/background.png");
let hillsImage = importImage("src/img/hills.png");
let platformImage = importImage("src/img/platform.png");
let platformSmallTallImage = importImage("src/img/platformSmallTall.png");

let spriteStandRightImage = importImage("src/img/spriteStandRight.png");
let spriteStandLeftImage = importImage("src/img/spriteStandLeft.png");
let spriteRunRightImage = importImage("src/img/spriteRunRight.png");
let spriteRunLeftImage = importImage("src/img/spriteRunLeft.png");

//
let player = new Player();
let platforms = [];
let genericObjects = [];

function init() {
  platformImage = importImage("src/img/platform.png");
  backgroundImage = importImage("src/img/background.png");
  hillsImage = importImage("src/img/hills.png");
  player = new Player();
  // const platform = new Platform(); //Tạo 1 platform
  //Tạo nhiều platform bằng cách sử dụng mảng
  platforms = [
    new platform({
      x:
        platformImage.width * 4 +
        300 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: platformSmallTallImage,
    }),
    new platform({
      x: -3,
      y: 470,
      image: platformImage,
    }),
    new platform({
      x: platformImage.width - 4,
      y: 470,
      image: platformImage,
    }),
    new platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 470,
      image: platformImage,
    }),
    new platform({
      x: platformImage.width * 5 + 800 - 2,
      y: 470,
      image: platformImage,
    }),
  ];

  genericObjects = [
    new genericObject({
      x: -1,
      y: -1,
      image: backgroundImage,
    }),
    new genericObject({
      x: -1,
      y: -1,
      image: hillsImage,
    }),
  ];
}

//Tạo biến theo dõi điều kiện thắng-thua
let scrollOffset = 0;

//Function render tài nguyên thay đổi theo thời gian
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });

  player.update(); //Nhân vật được vẽ cuối cùng

  // Di chuyển nhân vật và di chuyển platform theo nhân vật
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;

      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }
  console.log(scrollOffset);

  //Kiểm tra nhân vật và các object khác có chạm nhau hay không
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //Điều kiện để thay đổi mượt mà động tác nhân vật
  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  //Điều kiện thắng
  if (scrollOffset > platformImage.width * 5 + 300 - 2) {
    console.log("You Win!");
  }

  //Điều kiện thua (function init())
  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
