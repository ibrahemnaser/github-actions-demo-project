import { multiply } from "../src/lib/multiply";

describe("Testing Multiply Method", () => {
  test("Multiply Two Numbers (2, 3)", async () => {
    expect(multiply(2, 3)).toEqual(3);

    return;
  });
});
