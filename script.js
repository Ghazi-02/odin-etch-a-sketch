let x = parseInt(prompt("Enter a Value", "0"), 10);

const container = document.querySelector('#container')
     container.setAttribute('style',
    `width: ${Math.pow(x,2)}px;
     height: ${Math.pow(x,2)}px;
     `);
     

      






function grid(){
  for(let n = 0; n < x; n++){
     for(let i = 0; i < x; i++){
    
        const pixel = document.createElement('div');
            container.appendChild(pixel);
    
            pixel.setAttribute('style',
            `width: ${Math.pow(x,1)}px;
             height: ${Math.pow(x,1)}px;
             `)
            
             pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = "black";
                });
            
    
    }
}
} 
       
    
    grid();

  

