const container = document.querySelector('#container')

let x = 16



 function grid(){

    
    for(let i = 0; i < Math.pow(x,2); i++){

    const pixel = document.createElement('pixel');
    container.appendChild(pixel);

    }

 }


grid();

