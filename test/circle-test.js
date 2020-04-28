/**
 * @file circle-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Circle class
 */

"use strict";

let expectOnCircleTest;
let CircleOnCircleTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnCircleTest = require('chai').expect;
  CircleOnCircleTest = require('../src/circle.js').Circle;
} else { // Execution in browser
  expectOnCircleTest = expect;
  CircleOnCircleTest = Circle;
}

describe('Circle Class', () => {
  describe('Default properties', () => {
    const MY_CIRCLE = new CircleOnCircleTest();

    it('Circle has a xCoord', () => {
      expectOnCircleTest(MY_CIRCLE).to.have.property('xCoord');
      expectOnCircleTest(MY_CIRCLE.xCoord).to.be.a('number');
    });

    it('Circle has a yCoord', () => {
      expectOnCircleTest(MY_CIRCLE).to.have.property('yCoord');
      expectOnCircleTest(MY_CIRCLE.yCoord).to.be.a('number');
    });

    it('Circle has a radius', () => {
      expectOnCircleTest(MY_CIRCLE).to.have.property('radius');
      expectOnCircleTest(MY_CIRCLE.radius).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnCircleTest(MY_CIRCLE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnCircleTest(MY_CIRCLE.yCoord).to.be.equal(0);
    });

    it('Default radius is 0', () => {
      expectOnCircleTest(MY_CIRCLE.radius).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_CIRCLE = new CircleOnCircleTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnCircleTest(MY_CIRCLE.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnCircleTest(MY_CIRCLE.yCoord).to.be.equal(10);
    });

    it('Modifies default radius correctly', () => {
      expectOnCircleTest(MY_CIRCLE.radius).to.be.equal(15);
    });
  });
});
