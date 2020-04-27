/**
 * @file axes.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a axes class for Projectile Motion.
 *  More info about it here: https://en.wikipedia.org/wiki/Projectile_motion
 */

"use strict";

const BLACK_AXES = 'black';
const LINE_WIDTH = 5;
const ROUNDED = 'round';

/**
 * @description Class representing a axes
 *
 * @class Axes
 */
class Axes {

  /**
   * @description Constructor that creates an instance of a axes.
   *
   * @param {number} xCoord
   * @param {number} yCoord
   * @param {number} xLenght
   * @param {number} yLenght
   * @memberof Axes
   */
  constructor(xCoord, yCoord, xLenght, yLenght) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.xLenght = xLenght;
    this.yLenght = yLenght;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the coordinate axes in the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Axes
   */
  draw(CONTEXT, CANVAS) {
    CONTEXT.translate(this.xCoord, this.yCoord);

    CONTEXT.beginPath();
    CONTEXT.strokeStyle = BLACK_AXES;
    CONTEXT.lineWidth = LINE_WIDTH;
    CONTEXT.lineCap = ROUNDED;
    CONTEXT.moveTo(-this.xCoord / 4, 0);
    CONTEXT.lineTo(CANVAS.width - this.xCoord * 2, 0);
    CONTEXT.stroke();

    CONTEXT.beginPath();
    CONTEXT.strokeStyle = BLACK_AXES;
    CONTEXT.lineWidth = LINE_WIDTH;
    CONTEXT.lineCap = ROUNDED;
    CONTEXT.moveTo(0, (CANVAS.height - this.yCoord) / 4);
    CONTEXT.lineTo(0, CANVAS.height - this.yCoord * 2);
    CONTEXT.stroke();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Axes = Axes;
}
