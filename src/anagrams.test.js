// Function should accept two strings and determines whether or not they are anagrams of each other.
import { areAnagrams } from "./anagrams";
import { expect } from "chai";

describe("areAnagrams - basic functionality", () => {
  it("returns true when passed the same string two times, case insensitive", () => {
    const expected = true;
    const actual = areAnagrams("car", "CAR");
    expect(actual).to.equal(expected);
  });

  it("returns true when passed two different strings that are anagrams of each other, case insensitive", () => {
    const expected = true;
    const actual = areAnagrams("snail", "SLAIN");
    expect(actual).to.equal(expected);
  });

  it("returns true when passed two different strings that are anagrams of each other, case insensitive and ignoring whitespace", () => {
    const expected = true;
    const actual = areAnagrams("conversation", "voices rant on");
    expect(actual).to.equal(expected);
  });

  it("returns false when passed two different strings that are not anagrams of each other, case insensitive", () => {
    const expected = false;
    const actual = areAnagrams("snails", "Slain");
    expect(actual).to.equal(expected);
  });
});
