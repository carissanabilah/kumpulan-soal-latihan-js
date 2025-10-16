import { it, expect } from "vitest"
import suit from "../../src/latihan-2/3_gunting_batu_kertas"

const msg = (p) => `Pemain ${p} menang!`

it("Draw!", () => {
    expect(suit("gunting", "gunting")).equal("Draw!")
    expect(suit("batu", "batu")).equal("Draw!")
    expect(suit("kertas", "kertas")).equal("Draw!")
})

it("Pemain 1 menang!", () => {
    expect(suit("kertas", "batu")).equal(msg(1))
    expect(suit("batu", "gunting")).equal(msg(1))
    expect(suit("gunting", "kertas")).equal(msg(1))
})

it("Pemain 2 menang!", () => {
    expect(suit("kertas", "gunting")).equal(msg(2))
    expect(suit("batu", "kertas")).equal(msg(2))
    expect(suit("gunting", "batu")).equal(msg(2))
})
