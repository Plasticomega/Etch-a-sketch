/* 
1)Create a webpage with 16*16 grid of square divs
  - create using javascript
  - put grid squares inside a container div
  - USe flexbox to make gird
2)Set a hover effect that changes the color of divs
  - to change the color of div , add a new class to it
  - change its background color
3)




*/
let slider = document.querySelector("#myRange");
let output = document.querySelector("#demo");

output.innerHTML = slider.value; // Display the default slider value
let number_of_pixels = 55*55
let height_of_pixel = (400)/slider.value
let width_of_pixel = (400)/slider.value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(slider.value)
  number_of_pixels = slider.value * slider.value
  height_of_pixel = (400/slider.value)
  width_of_pixel = (400/slider.value)
  console.log('height'+height_of_pixel)
  console.log('width'+width_of_pixel)
  console.log(number_of_pixels)
  createGrid()
}
console.log(number_of_pixels+'oog')


let container = document.querySelector('.gab')





function createGrid(){
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
    pixel[n].addEventListener('mouseover',function(){ (pixel[n].style.backgroundColor = 'white')})
}



}

createGrid()



