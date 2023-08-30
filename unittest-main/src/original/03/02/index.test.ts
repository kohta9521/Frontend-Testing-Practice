import { add, sub } from ".";

describe("四則演算のテスト", () => {
  // add関数のテスト
  describe("add関数のテスト", () => {
    // １つ目のテスト
    test("1+1は2であるテスト", () => {
      expect(add(1, 1)).toBe(2);
    });
    // 2つ目のテスト
    test("1+2は3であるテスト", ()=> {
      expect(add(1, 2)).toBe(3);
    });
  });
  // sub関数のテスト
  describe("sub関数のテスト", () => {
    // 1つ目のテスト
    test("1-1は0であるテスト", () => {
      expect(sub(1, 1)).toBe(0);
    });
    // ２つ目のテスト
    test("2-1は1であるテスト", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});