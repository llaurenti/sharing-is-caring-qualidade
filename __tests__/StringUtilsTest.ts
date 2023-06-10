import { fromTimeInDecimal } from "../src/StringUtils";

describe("passando 0.0153 retorna 12321", () => {
  test("input 0.0158 retorna => 00:00:57", () => {
    const input = "0.0158";
    const expected = "00:00:57";
    expect(fromTimeInDecimal(input, false)).toBe(expected);
  });
});
