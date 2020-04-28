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
 * @description Function that stops the execution the given amount of time
 *
 * @param {number} msToWait - Number of miniseconds to stop the execution
 */
function sleep(msToWait) {
  return new Promise(resolve => setTimeout(resolve, msToWait));
}

/**
 * @description Class that calculates the value of pi
 *
 * @class MontecarloPi
 */
class MontecarloPi {

  /**
   *@description Constructor that ceates a instance of MontecarloPi
   * @memberof MontecarloPi
   */
  constructor() {
    this.numOfPoints = 0;
    this.numOfPointsInCircle = 0;
    this.valueOfPi = 0;
    this.animateFlag = false;
    this.centerPoint = new PointOnMontecarloPi(CANVAS1.width / 2,
      CANVAS1.height / 2);
    this.drawCircle();
    this.printInfo();
  }

  /**
   * @description Function that resets the canvas
   *
   * @memberof MontecarloPi
   */
  reset() {
    CONTEXT1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
    CONTEXT2.clearRect(0, 0, CANVAS2.width, CANVAS2.height);
    this.numOfPoints = 0;
    this.numOfPointsInCircle = 0;
    this.valueOfPi = 0;
    this.animateFlag = false;
    this.centerPoint = new PointOnMontecarloPi(CANVAS1.width / 2,
      CANVAS1.height / 2);
    this.drawCircle();
    this.printInfo();
  }

  /**
   * @description Function that draws a circle
   *
   * @memberof MontecarloPi
   */
  drawCircle() {
    let circle = new CircleOnMontecarloPi(this.centerPoint.xCoord,
      this.centerPoint.yCoord, CANVAS1.height / 2);
    circle.draw(CONTEXT1);
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
    CONTEXT2.fillText("Estimacion de pi: " + this.valueOfPi, 20, 150);
  }

  /**
   * @description Function that puts a point in canvas
   *
   * @memberof MontecarloPi
   */
  putRandomPoint() {
    const actualPoint = new Point(Math.random() * CANVAS1.width,
      Math.random() * CANVAS1.height);
    if (this.distanceBetweenPoints(actualPoint, this.centerPoint) <
      CANVAS1.width / 2) {
      actualPoint.draw('red', CONTEXT1, CANVAS1);
      this.numOfPointsInCircle++;
    } else {
      actualPoint.draw('blue', CONTEXT1, CANVAS1);
    }
    this.numOfPoints++;
    this.valueOfPi = 4 * (this.numOfPointsInCircle / this.numOfPoints);
    this.printInfo();
  }

  /**
   * @description Function that calculates the distance between two given points
   *
   * @param {PointOnMontecarloPi} pointA - One point
   * @param {PointOnMontecarloPi} pointB - Another point
   * @returns {number} Returns the distance between the two given points
   * @memberof MontecarloPi
   */
  distanceBetweenPoints(pointA, pointB) {
    return Math.sqrt(Math.pow(pointB.xCoord - pointA.xCoord, 2) +
      Math.pow(pointA.yCoord - pointB.yCoord, 2));
  }

  /**
   * @description Function that alternates the animation state
   *
   * @memberof MontecarloPi
   */
  animateControler() {
    if (this.animateFlag) {
      this.animateFlag = false;
    } else {
      this.animateFlag = true;
      this.animate();
    }
  }

  /**
   * @description Function that generates points secuentialy
   *
   * @memberof MontecarloPi
   */
  async animate() {
    while (this.animateFlag) {
      this.putRandomPoint();
      await sleep(100/document.getElementById("speed").value);
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.MontecarloPi = MontecarloPi;
}
