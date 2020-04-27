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
if (typeof require !== 'undefined') { // Execution in node
  PathOnProjectile = require('./path.js').Path;
} else { // Execution in browser
  PathOnProjectile = Path;
}

/**
 * @description Function that stops the execution the given amount of time
 *
 * @param {number} msToWait - Number of miniseconds to stop the execution
 */
function sleep(msToWait) {
  return new Promise(resolve => setTimeout(resolve, msToWait));
}

/**
 * @description Function that starts the execution of the program in browser
 */
function mainBrowser() {
  const CANVAS1 = document.getElementById("canvas1");
  const CANVAS2 = document.getElementById("canvas2");
  let initialVelocity = document.getElementById("initialVelocity");
  let launchAngle = document.getElementById("launchAngle");
  if ((CANVAS1.getContext) && (CANVAS2.getContext)) {
    const CONTEXT1 = CANVAS1.getContext("2d");
    const CONTEXT2 = CANVAS2.getContext("2d");

    CANVAS1.width = window.innerWidth - 50;
    CANVAS1.height = (window.innerHeight - 200) * 2 / 3;

    CANVAS2.width = (window.innerWidth - 100) / 2;
    CANVAS2.height = (window.innerHeight - 200) / 3;

    const initialPath = new PathOnProjectile();
    initialPath.calculateInfo();
    initialPath.printInfo(CONTEXT2, CANVAS2);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node.");
}
