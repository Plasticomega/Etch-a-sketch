let slider = document.querySelector("#myRange");
let output = document.querySelector("#demo");

let number_of_pixels = 55*55
let height_of_pixel = (600)/slider.value
let width_of_pixel = (600)/slider.value

slider.oninput = function() {
  number_of_pixels = slider.value * slider.value
  height_of_pixel = (600/slider.value)
  width_of_pixel = (600/slider.value)
  console.log('height'+height_of_pixel)
  console.log('width'+width_of_pixel)
  console.log(number_of_pixels)
  createGrid()
}



let container = document.querySelector('.gab')

let color
let isDrawing = false
let rainbowMode = false
let colorMode = true
let eraser = document.querySelector(".eraser")
eraser.addEventListener('click',()=> {
  rainbowMode = false;
  color = 'white'
})

function randomcolor(){
color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`}

document.querySelector('.colormode').addEventListener('click',()=>{colorMode = true;
  rainbowMode = false;
  color = document.querySelector('#colorpicker').value})
document.querySelector('.rainbow').addEventListener('click',()=>{colorMode = false;
  rainbowMode = true;
  randomcolor()
})

function createGrid(){
if (colorMode){
  let colorpicker = document.querySelector('#colorpicker')
  color = colorpicker.value
  colorpicker.oninput = function(){
  color = this.value
}}


container.innerHTML = '';
let grid
for(i=0;i<number_of_pixels;i++){
    grid = document.createElement('div')
    container.appendChild(grid)
    grid.classList.add('pixel')

}
let pixel = document.querySelectorAll('.pixel')
for(let n=0;n<number_of_pixels;n++){
    pixel[n].style.height = height_of_pixel + 'px'
    pixel[n].style.width = width_of_pixel + 'px'
    pixel[n].addEventListener('mousedown',function(e){ 
      e.preventDefault()
      isDrawing = true;
      if(rainbowMode){
        randomcolor()
      }
      (pixel[n].style.backgroundColor = color)})
    pixel[n].addEventListener('mouseup',function(){ 
      isDrawing = false})
    pixel[n].addEventListener('mousemove',function(){ 
      if (isDrawing){
      if(rainbowMode){
        randomcolor()
      }
      (pixel[n].style.backgroundColor = color)}})
}



}

createGrid()

let clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click',()=>{createGrid()})

