/**
 * @file montecarlo-pi.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the visualization of a Montecarlo method
 */

"use strict";

let PointOnMontecarloPi;
let CircleOnMontecarloPi;
if (typeof require !== 'undefined') { // Execution in node
  PointOnMontecarloPi = require('./point.js').Point;
  CircleOnMontecarloPi = require('./circle.js').Circle;
} else { // Execution in browser
  PointOnMontecarloPi = Point;
  CircleOnMontecarloPi = Circle;
}

function startMontecarloPi(CONTEXT, CANVAS) {
  let circle = new CircleOnMontecarloPi(CANVAS.width / 2, CANVAS.height / 2,
    CANVAS.height / 2);
  circle.draw(CONTEXT);
  let iterations = 1000;

    // while
}

/**
 * @description Function that starts the execution of the program in browser
 */
function mainBrowser() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    if (window.innerWidth < window.innerHeight) {
      CANVAS.width = window.innerWidth - 175;
      CANVAS.height = window.innerWidth - 175;
    } else {
      CANVAS.width = window.innerHeight - 175;
      CANVAS.height = window.innerHeight - 175;
    }

    startMontecarloPi(CONTEXT, CANVAS);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node.");
}
