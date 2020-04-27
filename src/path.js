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

const GRAVITY_FORCE = 9.81;

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

  calculateInfo() {
    this.airTime = Math.floor(1000 * 2 * this.initialVelocity *
      Math.sin(this.launchAngle * Math.PI / 180) / GRAVITY_FORCE) / 1000;
    this.maxXCoord = Math.floor(1000 * Math.pow(this.initialVelocity, 2) *
      Math.sin(2 * this.launchAngle * Math.PI / 180) / GRAVITY_FORCE) / 1000;
    this.maxYCoord = Math.floor(1000 * Math.pow(this.initialVelocity, 2) *
      Math.pow(Math.sin(this.launchAngle * Math.PI / 180), 2) /
      (2 * GRAVITY_FORCE)) / 1000;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Path = Path;
}
