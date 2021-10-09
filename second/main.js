//var
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.lineWidth = 4;

const width = 60;
const heigth = 60;
const gap = 20;

for(let i = 0; i < 5; i++){
    for (let j =0; j<5; j++){
        let x = 100 + (width + gap) * i;
        let y = 100 + (heigth + gap) * j;
        context.beginPath();
        context.rect(x, y, width, heigth);
        context.stroke();
        //smaller boxes
        if(Math.random() > 0.5){
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, heigth - 16);
            context.stroke();       
        }

    }
}