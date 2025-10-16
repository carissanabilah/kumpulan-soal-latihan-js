import { test, expect } from "vitest"
import warna_hantu from "../../src/latihan-1/3_warna_hantu"

test("Warna hantu", () => {
    const colors = ["white", "yellow", "purple", "red"]

    for (let i = 1; i <= 30; i++) {
        expect(warna_hantu()).oneOf(colors)
    }
})
