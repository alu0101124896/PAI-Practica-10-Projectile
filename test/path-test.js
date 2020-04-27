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

    it('Path has a iniXCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('iniXCoord');
      expectOnPathTest(MY_PATH.iniXCoord).to.be.a('number');
    });

    it('Path has a iniYCoord', () => {
      expectOnPathTest(MY_PATH).to.have.property('iniYCoord');
      expectOnPathTest(MY_PATH.iniYCoord).to.be.a('number');
    });
  });
});
