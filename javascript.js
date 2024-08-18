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

let container = document.querySelector('.container')

let number_of_pixels = 16

for(i = 0;i < number_of_pixels;i++){
     grid = document.createElement('div')
    container.appendChild(grid)
}
