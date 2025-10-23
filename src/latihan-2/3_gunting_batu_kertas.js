/**
 * ? Aturan permainan "Batu, Gunting, Kertas" adalah:
 * Batu mengalahkan Gunting
 * Gunting mengalahkan Kertas,
 * Kertas mengalahkan Batu.
 * Ayo main! Kamu harus kembalikan pemain mana yang menang! Jika seri, kembalikan Draw!
 */

/**
 * ? Contoh:
 * "gunting", "kertas" --> "Pemain 1 menang!"
 * "gunting", "batu" --> "Pemain 2 menang!"
 * "kertas", "kertas" --> "Draw!"
 */

// npx vitest run test/latihan-2/3_gunting_batu_kertas
function suit(p1, p2) {
    function pemenang(pemain) {
        return `Pemain ${pemain} menang!`
    }
    if (p1 === p2) {
        return "Draw!"
    }
    if (
        (p1 === "gunting" && p2 === "kertas") ||
        (p1 === "batu" && p2 === "gunting") ||
        (p1 === "kertas" && p2 === "batu")
    ) {
        return pemenang(1)
    } else {
        return pemenang(2)
    }
}

export default suit
