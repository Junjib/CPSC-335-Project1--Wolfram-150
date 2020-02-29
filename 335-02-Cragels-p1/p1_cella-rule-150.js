// Project 1: Cella-Rule-150
// Authors: Junji Bressan, Armon Rahimi, Cindy Quach
// Email: Junjib@csu.fullerton.edu
//        cindyquach@csu.fullerton.edu
//        armon16@csu.fullerton.edu

// Description:
// This file contains the script that will draw the grid and animates Wolfram-150. Makes use of P5.js and borrows from the sample
// code provided in js-p5-example folder.
// Time-stamp: <2020-29-02 10:00 AM>

var g_canvas = { cell_size:10, wid:41, hgt:41 }; // JS Global var, w canvas size info.
var currentGen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // This array represents the generation that will influence nextGen
var nextGen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // This array represents the next generation on the grid

// Global variables
let x, y;
let count;
let a, b, c;

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
    frameRate(12); // Modify the parameter in this function call to adjust the speed of the animation. Higher value increases speed, lower value decreases speed
    createNextGen();
}

function createNextGen() // Function updates arrays to be used to update grid
{
    let d;

    for(let j = 2; j < 43; j++)
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
    for(let i = 0; i < 43; i++)
    {
        currentGen[i] = nextGen[i];
    }
}

function rules(a, b, c) // Set of rules related to Wolfram-Rule 150
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
}

function draw() // Function draws grid and updates arrays by calling createNextGen()
{
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

function traverseRow() // Function draws a box signifying which generation we are on and which cell of a generation we are on
{
    draw_grid( 10, 50, "white" );

    stroke("RED");
    strokeWeight(2);
    noFill();
    rect(x, y, 10, 10);
    
    x = x + 10;
}