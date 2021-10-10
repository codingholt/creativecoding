const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    
    context.fillStyle = 'black';

    const x = 0;
    const y = 0;
    const w = width * 0.3;
    const h = height * 0.3;

    context.translate(500,500)
    context.rotate(0.5)

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5,w,h);
    context.fill();
    };
};

canvasSketch(sketch, settings);
