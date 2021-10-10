import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.011;

    const w = width * 0.10;
    const h = height * 0.10;
    const g = width * 0.05;
    const ix = width * 0.17;
    const iy = height * 0.17

    const off = width *0.02;

      
    for(let i = 0; i < 5; i++){
        for (let j =0; j<5; j++){
            let x = ix + (w + g) * i;
            let y = iy + (h + g) * j;
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();
            //smaller boxes
            if(Math.random() > 0.5){
                context.beginPath();
                context.rect(x + off / 2, y + off / 2, w - off, h - off);
                context.stroke();       
            }
          
        }
    }
  };
};

canvasSketch(sketch, settings);
