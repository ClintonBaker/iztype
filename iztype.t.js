const iztype = require("./");

// describe: Give it a description of what your testing and a callback.
// it: describe the specific test and a callback.
// expect: give it a value (or something that will evaluate) and
// use a matcher to assert what the outcome should be.

describe("iztype.char", () => {
  it("works as expected", () => {
    expect(iztype.char("aaa")).toEqual(false);
    expect(iztype.char(99)).toEqual(false);
    expect(iztype.char({})).toEqual(false);
    expect(iztype.char([])).toEqual(false);
    expect(iztype.char(true)).toEqual(false);
    expect(iztype.char("a")).toEqual(true);
  });
});

describe("iztype.string", () => {
  it("works as expected", () => {
    expect(iztype.string("aaa")).toEqual(true);
    expect(iztype.string(99)).toEqual(false);
    expect(iztype.string({})).toEqual(false);
    expect(iztype.string([])).toEqual(false);
    expect(iztype.string(true)).toEqual(false);
    expect(iztype.string("a")).toEqual(true);
  });
});

describe("iztype.array", () => {
  it("works as expected", () => {
    expect(iztype.array("aaa")).toEqual(false);
    expect(iztype.array(99)).toEqual(false);
    expect(iztype.array({})).toEqual(false);
    expect(iztype.array([])).toEqual(true);
    expect(iztype.array(true)).toEqual(false);
    expect(iztype.array("a")).toEqual(false);
  });
});

describe("iztype.object", () => {
  it("works as expected", () => {
    expect(iztype.object("aaa")).toEqual(false);
    expect(iztype.object(99)).toEqual(false);
    expect(iztype.object({})).toEqual(true);
    expect(iztype.object([])).toEqual(true);
    expect(iztype.object(true)).toEqual(false);
    expect(iztype.object("a")).toEqual(false);
    expect(iztype.object(new Map([[1, 2], [3, 4]]))).toEqual(false);
  });
});

describe("iztype.function", () => {
  it("works as expected", () => {
    expect(iztype.function("aaa")).toEqual(false);
    expect(iztype.function(99)).toEqual(false);
    expect(iztype.function({})).toEqual(false);
    expect(iztype.function([])).toEqual(false);
    expect(iztype.function(true)).toEqual(false);
    expect(iztype.function("a")).toEqual(false);
    expect(iztype.function(foo => "izbar")).toEqual(true);
  });
});

describe("iztype.bool", () => {
  it("works as expected", () => {
    expect(iztype.bool("aaa")).toEqual(false);
    expect(iztype.bool(99)).toEqual(false);
    expect(iztype.bool({})).toEqual(false);
    expect(iztype.bool([])).toEqual(false);
    expect(iztype.bool(true)).toEqual(true);
    expect(iztype.bool("a")).toEqual(false);
    expect(iztype.bool(foo => "izbar")).toEqual(false);
  });
});

describe("iztype.map", () => {
  it("works as expected", () => {
    expect(iztype.map("aaa")).toEqual(false);
    expect(iztype.map(99)).toEqual(false);
    expect(iztype.map({})).toEqual(false);
    expect(iztype.map([])).toEqual(false);
    expect(iztype.map(true)).toEqual(false);
    expect(iztype.map("a")).toEqual(false);
    expect(iztype.map(new Map([[1, 2], [3, 4]]))).toEqual(true);
  });
});
