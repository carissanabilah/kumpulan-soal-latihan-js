import { test } from "vitest"
import position from "../../src/latihan-1/2_temukan_posisi"
import { expect } from "vitest"

test.each([
    ["a", 1],
    ["c", 3],
    ["f", 6],
    ["z", 26]
])("Temukan posisi alfabet", function (char, expected) {
    expect(position(char)).toBe(`Posisi alfabet: ${expected}`)
})
