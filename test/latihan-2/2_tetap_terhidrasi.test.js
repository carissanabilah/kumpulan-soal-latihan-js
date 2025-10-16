import { test, expect } from "vitest"
import litres from "../../src/latihan-2/2_tetap_terhidrasi"

test("Liter", () => {
    expect(litres(0)).equal(0)
    expect(litres(1)).equal(0)
    expect(litres(2)).equal(1)
    expect(litres(3)).equal(1)
    expect(litres(4)).equal(2)
})
