/**
 * @file point.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a point class for Montecarlo method.
 * More info about it here: https://en.wikipedia.org/wiki/Monte_Carlo_method
 */

"use strict";

/**
 * @description Class representing a point
 *
 * @class Point
 */
class Point {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0] - X coordinate of the point
   * @param {number} [yCoord=0] - Y coordinate of the point
   * @memberof Point
   */
  constructor(xCoord = 0, yCoord = 0) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the point
   *
   * @param {string} color - Rgb color of the point
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Point
   */
  draw(color, CONTEXT, CANVAS) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = color;
    CONTEXT.ellipse(this.xCoord, this.yCoord, CANVAS.height / 100,
      CANVAS.height / 100, 0, 0, Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Point = Point;
}
