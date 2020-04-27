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

    it('Path has an inicialXCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('inicialXCoord');
      expectOnPathTest(MY_PATH.inicialXCoord).to.be.a('number');
    });

    it('Path has an inicialYCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('inicialYCoord');
      expectOnPathTest(MY_PATH.inicialYCoord).to.be.a('number');
    });

    it('Path has an inicialVelocity', () => {
      expectOnPathTest(MY_PATH).to.have.property('inicialVelocity');
      expectOnPathTest(MY_PATH.inicialVelocity).to.be.a('number');
    });

    it('Path has a launchAngle', () => {
      expectOnPathTest(MY_PATH).to.have.property('launchAngle');
      expectOnPathTest(MY_PATH.launchAngle).to.be.a('number');
    });

    it('Default inicialXCoord is 0', () => {
      expectOnPathTest(MY_PATH.inicialXCoord).to.be.equal(0);
    });

    it('Default inicialYCoord is 0', () => {
      expectOnPathTest(MY_PATH.inicialYCoord).to.be.equal(0);
    });

    it('Default inicialVelocity is 20', () => {
      expectOnPathTest(MY_PATH.inicialVelocity).to.be.equal(20);
    });

    it('Default launchAngle is 60', () => {
      expectOnPathTest(MY_PATH.launchAngle).to.be.equal(60);
    });
  });

  describe('Non default property values', () => {
    const MY_PATH = new PathOnPathTest(5, 10);

    it('Modifies default inicialXCoord correctly', () => {
      expectOnPathTest(MY_PATH.inicialXCoord).to.be.equal(5);
    });

    it('Modifies default inicialYCoord correctly', () => {
      expectOnPathTest(MY_PATH.inicialYCoord).to.be.equal(10);
    });
  });

  describe('Path final info', () => {
    const MY_PATH = new PathOnPathTest();

    it('Calculates final info correctly', () => {
      MY_PATH.calulateInfo();
    });
  });
});
