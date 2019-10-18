const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');


canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle ="#2c2c2c";
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
     mode.innerText = 'paint'
   }



  // if(mode.innerHTML === 'FILL') {
  //    mode.innerHTML = 'paint';
  // } else {
  //   mode.innerHTML = 'FILL'
  // }
};

if(canvas) {
  canvas.addEventListener('mousemove',mouseMove);
  canvas.addEventListener('mousedown',startPainting);  //mousedown:클릭시 발생하는 이벤트
  canvas.addEventListener('mouseup',stopPainting);
  canvas.addEventListener('mouseleave',stopPainting);
};

Array.from(colors).forEach(color =>
  color.addEventListener('click',colorClick));


if(range) {
  range.addEventListener('input',rangeChange);
};

if(mode) {
  mode.addEventListener('click',modeClick)
};
























//
