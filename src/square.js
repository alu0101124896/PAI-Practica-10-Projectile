/**
 * @file square.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a square class for Montecarlo method.
 *  More info about it here: https://en.wikipedia.org/wiki/Projectile_motion
 */

"use strict";

const BLACK_SQUARE = 'black';

/**
 * @description Class representing a square
 *
 * @class Square
 */
class Square {

  /**
   * @description Constructor that creates an instance of a square.
   *
   * @param {number} [xCoord=0] - X coordinate of the square
   * @param {number} [yCoord=0] - Y coordinate of the square
   * @param {number} [width=10] - Width of the square
   * @memberof Square
   */
  constructor(xCoord = 0, yCoord = 0, width = 10) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.width = width;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the square
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Square
   */
  draw(CONTEXT, CANVAS) {
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = BLACK_SQUARE;
    CONTEXT.rect(this.xCoord, this.yCoord, this.width, this.width);
    CONTEXT.stroke();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Square = Square;
}
