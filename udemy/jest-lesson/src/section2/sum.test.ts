import { sum } from "./sum";

// it("1+2=3になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });

it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${2} | ${3}  | ${5}
  ${3} | ${4}  | ${7}
  ${1} | ${-1} | ${0}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
