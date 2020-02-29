Readme for 335-02-Cragels-p1
Time-stamp: <2020-02-28 10:00 AM>
Team: Cragels
Members: Junji Bressan, Armon Rahimi, Cindy Quach
Class: CPSC 335-02
---------------------------------------------------------------------------------

Intro

   This program generates a one-dimensional celluar automata based on Wolfram-rule 150.
   The pattern is generated on a 410 X 410 grid with cells that are 10 pixels in size.
   Once all generations on the grid have been generated the program is finished. If you wish
   to restart the pattern hit the refresh button on the web page. The speed of the pattern
   generation can be adjusted by editing line 33 of p1_cella-rule-150.js.

   This program makes use of HTML, Javascript, and the p5.js package for creating the animation.

Zip Contents

   File readme.txt. This file.

   File pix-p1_cella-rule-150.jpg. Image of rule 150 on webpage.

   File wolfram-150.html. Webpage that will display rule 150.

   File p5.js. This is the p5 package.

   File p1_cella-rule-150.js. This file contains the JS script that calls functions that
                              will draw rule 150.

   File assets/styles.css. This file controls the styling of the webpage.

   File assets/draw-stuffP1.js. This file contains the function calls that will draw the grid
                                to the canvas on the webpage.


Installation & Running

   1. Extract the .zip file into a folder

   2. Drag the wolfram-150.html file into an empty browser window. The program should start
      immediately. There should be 410 X 410 grid with white grid lines and the middle cell
      in the first row should be colored red. See the picture pix-p1_cella-rule-150.jpg.

Known Bugs

   Doesn't effect the performance of the program or the readablility of the pattern, but
   on the farthest RHS column and the bottom row the edges of the canvas remain painted red.
   Can be seen in the image pix-p1_cella-rule-150.jpg.

Warnings

   None

Testing

   Dragged the html file to an empty webpage and watched it run. It creates the pattern
   associated with Wolfram-150.

Credits

   Code was borrowed from the js-p5-example folder provided by Professor Chuck Siska. The format of the CSS and HTML file
   was used, and most of the code provided in draw-stuff.js was left intact, with only a few edits.


