/**
 * @file path.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a path class for Projectile Motion.
 *  More info about it here: https://en.wikipedia.org/wiki/Projectile_motion
 */

"use strict";

let PointOnPath;
if (typeof require !== 'undefined') { // Execution in node
  PointOnPath = require('./point.js').Point;
} else { // Execution in browser
  PointOnPath = Point;
}

const GRAVITY_FORCE = 9.81;
const BLACK_INFO = 'black';
const THIRTY_PX_ARIAL = "30px Arial";
const TIME_INTERVAL = 0.5;

/**
 * @description Class representing a path
 *
 * @class Path
 */
class Path {

  /**
   * @description Constructor that creates an instance of a path.
   *
   * @param {number} [initialXCoord=0]
   * @param {number} [initialYCoord=0]
   * @param {number} [initialVelocity=20]
   * @param {number} [launchAngle=60]
   * @param {boolean} [drawPath=true]
   * @memberof Path
   */
  constructor(initialXCoord = 0, initialYCoord = 0, initialVelocity = 20,
    launchAngle = 60, drawPath = true) {
    this.initialXCoord = initialXCoord;
    this.initialYCoord = initialYCoord;
    this.initialVelocity = initialVelocity;
    this.launchAngle = launchAngle;
    this.drawPath = drawPath;
  }

  /**
   * @description Function that calculates the air time, the maximum height
   *  reached by the projectile and the maximun horizontal displacement
   *
   * @memberof Path
   */
  calculateInfo() {
    this.airTime = Math.floor(1000 * 2 * this.initialVelocity *
      Math.sin(this.launchAngle * Math.PI / 180) / GRAVITY_FORCE) / 1000;
    this.maxXCoord = Math.floor(1000 * Math.pow(this.initialVelocity, 2) *
      Math.sin(2 * this.launchAngle * Math.PI / 180) / GRAVITY_FORCE) / 1000;
    this.maxYCoord = Math.floor(1000 * Math.pow(this.initialVelocity, 2) *
      Math.pow(Math.sin(this.launchAngle * Math.PI / 180), 2) /
      (2 * GRAVITY_FORCE)) / 1000;
  }

  /* istanbul ignore next */
  /**
   * @description Function that prints the projectile info in the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Path
   */
  printInfo(CONTEXT, CANVAS) {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CONTEXT.fillStyle = BLACK_INFO;
    CONTEXT.font = THIRTY_PX_ARIAL;
    CONTEXT.fillText("Tiempo en el aire: " + this.airTime, 20, 50);
    CONTEXT.fillText("Distancia horizontal: " + this.maxXCoord, 20, 100);
    CONTEXT.fillText("Altura máxima: " + this.maxYCoord, 20, 150);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the projectile path in the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Path
   */
  draw(CONTEXT, CANVAS) {
    let actualPoint = new PointOnPath(this.initialXCoord, this.initialYCoord);
    do {

    } while (actualPoint.xCoord > 0);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Path = Path;
}
