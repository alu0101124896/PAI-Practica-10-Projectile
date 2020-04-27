/**
 * @file axes-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Axes class
 */

"use strict";

let expectOnAxesTest;
let AxesOnAxesTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnAxesTest = require('chai').expect;
  AxesOnAxesTest = require('../src/axes.js').Axes;
} else { // Execution in browser
  expectOnAxesTest = expect;
  AxesOnAxesTest = Axes;
}

describe('Axes Class', () => {
  describe('Default properties', () => {
    const MY_AXES = new AxesOnAxesTest(10, 50, 200);

    it('Axes has an xCoord', () => {
      expectOnAxesTest(MY_AXES).to.have.property('xCoord');
      expectOnAxesTest(MY_AXES.xCoord).to.be.a('number');
    });

    it('Axes has an yCoord', () => {
      expectOnAxesTest(MY_AXES).to.have.property('yCoord');
      expectOnAxesTest(MY_AXES.yCoord).to.be.a('number');
    });

    it('Axes has an xLenght', () => {
      expectOnAxesTest(MY_AXES).to.have.property('xLenght');
      expectOnAxesTest(MY_AXES.xLenght).to.be.a('number');
    });
  });
});
