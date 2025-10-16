import { test, expect } from "vitest"
import diffInAges from "../../src/latihan-2/1_selisih_usia"

test("Selisih usia", () => {
    expect(diffInAges([82, 15, 6, 38, 35])).deep.equal([6, 82, 76])
    expect(diffInAges([57, 99, 14, 32])).deep.equal([14, 99, 85])
})
