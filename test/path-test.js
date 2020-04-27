/**
 * @file path-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Path class
 */

"use strict";

let expectOnPathTest;
let PathOnPathTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPathTest = require('chai').expect;
  PathOnPathTest = require('../src/path.js').Path;
} else { // Execution in browser
  expectOnPathTest = expect;
  PathOnPathTest = Path;
}

describe('Path Class', () => {
  describe('Default properties', () => {
    const MY_PATH = new PathOnPathTest();

    it('Path has an initialXCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('initialXCoord');
      expectOnPathTest(MY_PATH.initialXCoord).to.be.a('number');
    });

    it('Path has an initialYCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('initialYCoord');
      expectOnPathTest(MY_PATH.initialYCoord).to.be.a('number');
    });

    it('Path has an initialVelocity', () => {
      expectOnPathTest(MY_PATH).to.have.property('initialVelocity');
      expectOnPathTest(MY_PATH.initialVelocity).to.be.a('number');
    });

    it('Path has a launchAngle', () => {
      expectOnPathTest(MY_PATH).to.have.property('launchAngle');
      expectOnPathTest(MY_PATH.launchAngle).to.be.a('number');
    });

    it('Path has a drawPath', () => {
      expectOnPathTest(MY_PATH).to.have.property('drawPath');
      expectOnPathTest(MY_PATH.drawPath).to.be.a('boolean');
    });

    it('Default initialXCoord is 0', () => {
      expectOnPathTest(MY_PATH.initialXCoord).to.be.equal(0);
    });

    it('Default initialYCoord is 0', () => {
      expectOnPathTest(MY_PATH.initialYCoord).to.be.equal(0);
    });

    it('Default initialVelocity is 20', () => {
      expectOnPathTest(MY_PATH.initialVelocity).to.be.equal(20);
    });

    it('Default launchAngle is 60', () => {
      expectOnPathTest(MY_PATH.launchAngle).to.be.equal(60);
    });

    it('Default drawPath is true', () => {
      expectOnPathTest(MY_PATH.drawPath).to.be.equal(true);
    });
  });

  describe('Non default property values', () => {
    const MY_PATH = new PathOnPathTest(15, 20, false);

    it('Default initialVelocity is 20', () => {
      expectOnPathTest(MY_PATH.initialVelocity).to.be.equal(15);
    });

    it('Default launchAngle is 60', () => {
      expectOnPathTest(MY_PATH.launchAngle).to.be.equal(20);
    });

    it('Default drawPath is true', () => {
      expectOnPathTest(MY_PATH.drawPath).to.be.equal(false);
    });
  });

  describe('Path final info', () => {
    const MY_PATH = new PathOnPathTest();

    it('Calculates final info correctly', () => {
      MY_PATH.calculateInfo();
      expectOnPathTest(MY_PATH.airTime).to.be.equal(3.531);
      expectOnPathTest(MY_PATH.maxXCoord).to.be.equal(35.311);
      expectOnPathTest(MY_PATH.maxYCoord).to.be.equal(15.29);
    });
  });
});
