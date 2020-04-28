/**
 * @file montecarlo-pi.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the visualization of a Montecarlo method
 * . More info about it here: https://en.wikipedia.org/wiki/Monte_Carlo_method
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

const BLACK_INFO = 'black';
const THIRTY_PX_ARIAL = "30px Arial";

const CANVAS1 = document.getElementById("canvas1");
const CANVAS2 = document.getElementById("canvas2");
const CONTEXT1 = CANVAS1.getContext("2d");
const CONTEXT2 = CANVAS2.getContext("2d");
CANVAS1.width = (window.innerWidth - 100) / 2;
CANVAS1.height = (window.innerWidth - 100) / 2;
CANVAS2.width = (window.innerWidth - 100) / 2;
CANVAS2.height = (window.innerWidth - 100) / 4;

/**
 * @description Class that calculates the value of pi
 *
 * @class MontecarloPi
 */
class MontecarloPi {

  /**
   *@description function that ceates a instance of MontecarloPi
   * @memberof MontecarloPi
   */
  constructor() {
    this.drawCircle();
    this.numOfPoints = 0;
    this.numOfPointsInCircle = 0;
    this.PIval = 0;
  }

  /**
   * @description Function that prints the info
   *
   * @memberof MontecarloPi
   */
  printInfo() {
    CONTEXT2.clearRect(0, 0, CANVAS2.width, CANVAS2.height);
    CONTEXT2.fillStyle = BLACK_INFO;
    CONTEXT2.font = THIRTY_PX_ARIAL;
    CONTEXT2.fillText("Numero de puntos: " + this.numOfPoints, 20, 50);
    CONTEXT2.fillText("Puntos en el circulo: " + this.numOfPointsInCircle, 20,
      100);
    CONTEXT2.fillText("Estimacion de pi: " + this.PIval, 20, 150);
  }

  /**
   * @description function that puts a point in canvas
   *
   * @memberof MontecarloPi
   */
  putPointMontecarloPi() {
    const newPoint = new Point(Math.random() * CANVAS1.width,
      Math.random() * CANVAS1.height);
    newPoint.draw('green', CONTEXT1, CANVAS1);
    this.numOfPoints++;
    this.numOfPointsInCircle++;
    this.printInfo();
  }

  /**
   *@description function that draws a circle
   *
   * @memberof MontecarloPi
   */
  drawCircle() {
    let circle = new CircleOnMontecarloPi(CANVAS1.width / 2, CANVAS1.height / 2,
      CANVAS1.height / 2);
    circle.draw(CONTEXT1);
  }

  /**
   * @description function that resets the canvas
   *
   * @memberof MontecarloPi
   */
  clearCanvas() {
    CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
    CONTEXT2.clearRect(0, 0, CANVAS2.width, CANVAS2.height);
    this.drawCircle();
    this.numOfPoints = 0;
    this.numOfPointsInCircle = 0;
    this.PIval = 0;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.MontecarloPi = MontecarloPi;
}
