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

/**
 * @description Class representing a path
 *
 * @class Path
 */
class Path {

  /**
   * @description Constructor that creates an instance of a path.
   *
   * @param {number} [inicialXCoord=0]
   * @param {number} [inicialYCoord=0]
   * @param {number} [inicialVelocity=20]
   * @param {number} [launchAngle=60]
   * @param {boolean} [drawPath=true]
   * @memberof Path
   */
  constructor(inicialXCoord = 0, inicialYCoord = 0, inicialVelocity = 20,
    launchAngle = 60, drawPath = true) {
    this.inicialXCoord = inicialXCoord;
    this.inicialYCoord = inicialYCoord;
    this.inicialVelocity = inicialVelocity;
    this.launchAngle = launchAngle;
    this.drawPath = drawPath;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Path = Path;
}
