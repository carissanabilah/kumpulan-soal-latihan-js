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

    // Tulis kode disini
}

export default suit
