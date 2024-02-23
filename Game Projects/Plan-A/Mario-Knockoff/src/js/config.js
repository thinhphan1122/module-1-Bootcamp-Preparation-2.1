//Tạo canvas
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//Căn chỉnh canvas theo kích thước màn hình
canvas.width = 1024;
canvas.height = 576;

//Tạo trọng lực
const gravity = 0.5;
