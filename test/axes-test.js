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
  describe('Properties', () => {
    const MY_AXES = new AxesOnAxesTest(10, 50, 200, 100);

    it('Axes has a xCoord', () => {
      expectOnAxesTest(MY_AXES).to.have.property('xCoord');
      expectOnAxesTest(MY_AXES.xCoord).to.be.a('number');
      expectOnAxesTest(MY_AXES.xCoord).to.be.equal(10);
    });

    it('Axes has a yCoord', () => {
      expectOnAxesTest(MY_AXES).to.have.property('yCoord');
      expectOnAxesTest(MY_AXES.yCoord).to.be.a('number');
      expectOnAxesTest(MY_AXES.yCoord).to.be.equal(50);
    });
  });
});
