/**
 * @file square-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Square class
 */

"use strict";

let expectOnSquareTest;
let SquareOnSquareTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnSquareTest = require('chai').expect;
  SquareOnSquareTest = require('../src/square.js').Square;
} else { // Execution in browser
  expectOnSquareTest = expect;
  SquareOnSquareTest = Square;
}

describe('Square Class', () => {
  describe('Default properties', () => {
    const MY_SQUARE = new SquareOnSquareTest();

    it('Square has a xCoord', () => {
      expectOnSquareTest(MY_SQUARE).to.have.property('xCoord');
      expectOnSquareTest(MY_SQUARE.xCoord).to.be.a('number');
    });

    it('Square has a yCoord', () => {
      expectOnSquareTest(MY_SQUARE).to.have.property('yCoord');
      expectOnSquareTest(MY_SQUARE.yCoord).to.be.a('number');
    });

    it('Square has a width', () => {
      expectOnSquareTest(MY_SQUARE).to.have.property('width');
      expectOnSquareTest(MY_SQUARE.width).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnSquareTest(MY_SQUARE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnSquareTest(MY_SQUARE.yCoord).to.be.equal(0);
    });

    it('Default width is 0', () => {
      expectOnSquareTest(MY_SQUARE.width).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_SQUARE = new SquareOnSquareTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnSquareTest(MY_SQUARE.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnSquareTest(MY_SQUARE.yCoord).to.be.equal(10);
    });

    it('Modifies default width correctly', () => {
      expectOnSquareTest(MY_SQUARE.width).to.be.equal(15);
    });
  });
});
