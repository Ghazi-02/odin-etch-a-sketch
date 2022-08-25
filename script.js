const blck = document.querySelector('.blck')
const reset = document.querySelector('.reset')
const rgb = document.querySelector('.rgb')
const small = document.querySelector('.small')
const medium = document.querySelector('.medium')
const large = document.querySelector('.large')
const size = document.querySelector('.size')
const container = document.querySelector('#container')
let largeGrid = document.querySelector('#large');
let mediumGrid = document.querySelector('#medium');
let smallGrid = document.querySelector('#small');
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}








function generateGrid(gridSize = 16) {


    container.setAttribute('style',
        `width: ${Math.pow(gridSize,2)}px;
   height: ${Math.pow(gridSize,2)}px;
   `);




    for (let n = 0; n < gridSize; n++) {
        for (let i = 0; i < gridSize; i++) {



            let pixel = document.createElement('div');


            container.appendChild(pixel);




            pixel.setAttribute('style',
                `width: ${gridSize}px;
             height: ${gridSize}px;
             `)




            blck.addEventListener('click', () => {
                pixel.addEventListener('mouseover', () => {
                    pixel.style.backgroundColor = "black";
                });


            });
            rgb.addEventListener('click', () => {

                pixel.addEventListener('mouseover', () => {
                    pixel.style.backgroundColor = `${getRandomRgb()} `

                })


            });




            reset.addEventListener('click', () => {
                pixel.querySelectorAll('div');
                pixel.style.backgroundColor = "antiquewhite";




            });

    }
}
}
generateGrid();



smallGrid.addEventListener('click', () => {

   while (container.firstChild) {
       container.removeChild(container.lastChild)

   } generateGrid(8)
});



mediumGrid.addEventListener('click', () => {

   while (container.firstChild) {
      container.removeChild(container.lastChild) 
   } generateGrid(16)
});



largeGrid.addEventListener('click', () => {

   while (container.firstChild) {
      container.removeChild(container.lastChild) 
   } generateGrid(24)
});