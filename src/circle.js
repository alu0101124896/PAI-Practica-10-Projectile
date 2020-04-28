/**
 * @file circle.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a circle class for Montecarlo method
 */

"use strict";

const LINE_WIDTH = 3;

/**
 * @description Class representing a circle
 *
 * @class Circle
 */
class Circle {

  /**
   * @description Constructor that creates an instance of a circle.
   *
   * @param {number} [xCoord=0] - X coordinate of the circle
   * @param {number} [yCoord=0] - Y coordinate of the circle
   * @param {number} [radius=10] - Radius of the circle
   * @memberof Circle
   */
  constructor(xCoord = 0, yCoord = 0, radius = 10) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the circle
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Circle
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = '#fffffe'
    CONTEXT.lineWidth = LINE_WIDTH;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0, 0,
      Math.PI * 2);
    CONTEXT.stroke();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Circle = Circle;
}
