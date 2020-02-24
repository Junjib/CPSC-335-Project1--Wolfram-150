// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference
// Time-stamp: <2020-02-02 15:58:23 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:41, hgt:41 }; // JS Global var, w canvas size info.
var currentGen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var nextGen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let x, y;
let count;
let a, b, c;
let size = 41;

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, "white" );
    fill("red");
    square(200, 0, 10);
    count = 0;
    x = 0;
    y = 10;
    //frameRate(5);
    createNextGen();
}

function createNextGen()
{
    let d;


    for(let j = 2; j < 41; j++)
    {
        if(j == 2)
        {
            a = currentGen[0]; b = currentGen[1]; c = currentGen[j];
            d = rules(a, b, c);
            nextGen[j-1] = d;
        }
        else
        {
            a = b; b = c; c = currentGen[j];
            d = rules(a, b, c);
            nextGen[j-1] = d;
        }
    }
    for(let i = 0; i < 41; i++)
    {
        currentGen[i] = nextGen[i];
    }
}

function rules(a, b, c)
{
    if(a == 1 && b == 1 && c == 1)
    {
        return 1;
    }
    if(a == 1 && b == 1 && c == 0)
    {
        return 0;
    }
    if(a == 1 && b == 0 && c == 1)
    {
        return 0;
    }
    if(a == 1 && b == 0 && c == 0)
    {
        return 1;
    }
    if(a == 0 && b == 1 && c == 1)
    {
        return 0;
    }
    if(a == 0 && b == 1 && c == 0)
    {
        return 1;
    }
    if(a == 0 && b == 0 && c == 1)
    {
        return 1;
    }
    if(a == 0 && b == 0 && c == 0)
    {
        return 0;
    }
    //return 0;
}

function draw()
{
    //county = y;
   
    /*stroke("Black");
    strokeWeight(5);
    noFill();
    rect(x, y, 30, 10);*/

    //y = y + 10;
    count++;
    if(nextGen[count] == 0)
    {
        fill("red");
        rect(x, y, 10, 10);
    }
    traverseRow();
    if (count == 43){
        count = 0;
        x = 0
        y = y + 10;
        createNextGen();
    }
}

function traverseRow()
{
    draw_grid( 10, 50, "white" );

    stroke("RED");
    strokeWeight(2);
    noFill();
    rect(x, y, 10, 10);
    
    x = x + 10;
}
