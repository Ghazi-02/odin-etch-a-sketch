let x =parseInt(prompt("Enter a Value", "16"), 10);
const blck = document.querySelector('.blck')
const reset = document.querySelector('.reset')
const rgb = document.querySelector('.rgb')
const container = document.querySelector('#container')
     container.setAttribute('style',
    `width: ${Math.pow(x,2)}px;
     height: ${Math.pow(x,2)}px;
     `);
     

      

     function getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }




function grid(){
  for(let n = 0; n < x; n++){
     for(let i = 0; i < x; i++){
    
        const pixel = document.createElement('div');
            container.appendChild(pixel);
    
            pixel.setAttribute('style',
            `width: ${Math.pow(x,1)}px;
             height: ${Math.pow(x,1)}px;
             `)
             blck.addEventListener('click',()=>{
                pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = "black";
                     });
                    

            });rgb.addEventListener('click',()=>{
                
                    pixel.addEventListener('mouseover', () => {
                     pixel.style.backgroundColor = `${getRandomRgb()} `  
                    
                    })


            })
                
                
                
                
                reset.addEventListener('click',()=>{
                    pixel.querySelectorAll('div');
                    pixel.style.backgroundColor = "white";
                


             })
             
             
             
             
              
    
    }
}
} 
       
    
    

  
grid();
