/**
 * @file projectile.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the visualization of Projectile Motion.
 *  More info about it here: https://en.wikipedia.org/wiki/Projectile_motion
 */

"use strict";

let PathOnProjectile;
let AxesOnProjectile;
if (typeof require !== 'undefined') { // Execution in node
  PathOnProjectile = require('./path.js').Path;
  AxesOnProjectile = require('./axes.js').Axes;
} else { // Execution in browser
  PathOnProjectile = Path;
  AxesOnProjectile = Axes;
}

// He tenido que declarar los canvas de forma global para poder acceder a ellos
//  desde mainBrowser y desde newThrow
const CANVAS1 = document.getElementById("canvas1");
const CANVAS2 = document.getElementById("canvas2");
const CONTEXT1 = CANVAS1.getContext("2d");
const CONTEXT2 = CANVAS2.getContext("2d");
CANVAS1.width = window.innerWidth - 50;
CANVAS1.height = (window.innerHeight - 200) * 3 / 4;
CANVAS2.width = (window.innerWidth - 100) / 2;
CANVAS2.height = (window.innerHeight - 200) / 4;


/**
 * @description Function that generates and draws a new path and its info
 */
function newThrow() {
  let initialVelocity = document.getElementById("initialVelocity");
  let launchAngle = document.getElementById("launchAngle");
  let drawPath = document.getElementById("drawPath");
  let newPath = new PathOnProjectile(initialVelocity.value,
    launchAngle.value, drawPath.checked);
  newPath.draw(CONTEXT1, CANVAS1);
  newPath.calculateInfo();
  newPath.printInfo(CONTEXT2, CANVAS2);
}

/**
 * @description Function that starts the execution of the program in browser
 */
function mainBrowser() {
  let coordinateAxes = new AxesOnProjectile(50, CANVAS1.height - 50);
  coordinateAxes.draw(CONTEXT1, CANVAS1);
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node.");
}
