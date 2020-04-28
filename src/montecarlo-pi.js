/**
 * @file montecarlo-pi.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the visualization of a Montecarlo method
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

const CANVAS1 = document.getElementById("canvas1");
const CANVAS2 = document.getElementById("canvas2");
const CONTEXT1 = CANVAS1.getContext("2d");
const CONTEXT2 = CANVAS2.getContext("2d");
CANVAS1.width = (window.innerWidth - 100) / 2;
CANVAS1.height = (window.innerWidth - 100) / 2;
CANVAS2.width = (window.innerWidth - 100) / 2;
CANVAS2.height = (window.innerWidth - 100) / 4;

class MontecarloPi {
  constructor(){
    this.drawCircle();
    this.numOfPoints = 0;
    this.numOfPointsInCircle = 0;
    this.PIval = 0;
  }

  printInfo(CONTEXT, CANVAS) {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CONTEXT.fillStyle = BLACK_INFO;
    CONTEXT.font = THIRTY_PX_ARIAL;
    CONTEXT.fillText("Numero de puntos: " + this.airTime, 20, 50);
    CONTEXT.fillText("Distancia horizontal: " + this.maxXCoord, 20, 100);
    CONTEXT.fillText("Altura máxima: " + this.maxYCoord, 20, 150);
  }

  putPointMontecarloPi() {
    const newPoint = new Point(Math.random() * CANVAS1.width,
      Math.random() * CANVAS1.height);
    newPoint.draw('green', CONTEXT1, CANVAS1);
    printInfo(CONTEXT2, CANVAS2);
  }

  drawCircle() {
    let circle = new CircleOnMontecarloPi(CANVAS1.width / 2, CANVAS1.height / 2,
      CANVAS1.height / 2);
    circle.draw(CONTEXT1);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.MontecarloPi = MontecarloPi;
}
