const tail = require('../tail.js');
const assert = require('chai').assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);
describe("tail", () => {
  it("should return 2 for ['Hello', 'Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("should return 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("should return 'Labs' for ['Hello', 'Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(result[1], "Labs");
  });
});