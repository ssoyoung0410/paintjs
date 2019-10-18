const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById('jsSave');

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
};

function startPainting() {
  painting = true;

};

function mouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x,y);
  } else {
     ctx.lineTo(x,y);
     ctx.stroke();
  }
};

function colorClick(event) {
  const bgColor = event.target.style.backgroundColor; //내가 클릭한 그것의 CSS스타일
  ctx.strokeStyle = bgColor;
  ctx.fillStyle = bgColor;
};

function rangeChange(evnet) {
  const rangeValue = event.target.value;
  ctx.lineWidth = rangeValue;
};

function modeClick() {
   if(filling === true) {
     filling = false;
     mode.innerText = 'FILL'
   } else {
     filling = true;
     mode.innerText = 'paint';

   }
};

function canvasClick () {
  if(filling){
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
  }
  //ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

function saveClick () {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'painImage';
  link.click();
}

if(canvas) {
  canvas.addEventListener('mousemove',mouseMove);
  canvas.addEventListener('mousedown',startPainting);  //mousedown:클릭시 발생하는 이벤트
  canvas.addEventListener('mouseup',stopPainting);
  canvas.addEventListener('mouseleave',stopPainting);
  canvas.addEventListener('click',canvasClick);
};

Array.from(colors).forEach(color =>
  color.addEventListener('click',colorClick));


if(range) {
  range.addEventListener('input',rangeChange);
};

if(mode) {
  mode.addEventListener('click',modeClick);
};

if(save) {
  save.addEventListener('click',saveClick);
}






















//
