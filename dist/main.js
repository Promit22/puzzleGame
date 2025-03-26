"use strict";
// console.log('hell ts');
const images = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png',
    'assets/image4.png',
    'assets/image5.png',
    'assets/image6.png',
    'assets/image7.png',
    'assets/image8.png',
    'assets/image9.png'
];
let currentDrag;
const imgContainer = document.getElementById('imgContainer');
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const rnd = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rnd]] = [arr[rnd], arr[i]];
    }
    return arr;
}
function renderImage() {
    const randomImages = shuffle(images);
    randomImages.forEach((img) => {
        const elm = document.createElement("img");
        elm.src = img;
        elm.alt = "fractional image";
        elm.setAttribute("draggable", "true");
        elm.addEventListener("dragstart", dragStartHandler);
        elm.addEventListener("dragover", dragOverhandler);
        elm.addEventListener("drop", drophandler);
        imgContainer.appendChild(elm);
    });
}
renderImage();
function dragStartHandler(e) {
    var _a;
    const element = e.target;
    currentDrag = element;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text", currentDrag.src);
}
function dragOverhandler(e) {
    e.preventDefault();
}
function drophandler(e) {
    const dropZone = e.target;
    const src2 = dropZone.src;
    dropZone.src = e.dataTransfer.getData("text");
    currentDrag.src = src2;
}
