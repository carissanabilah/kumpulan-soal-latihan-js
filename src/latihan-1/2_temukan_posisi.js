/**
 * Jika diberikan huruf, kembalikan posisinya dalam alfabet.
 * Input :: "a" Output :: "Posisi alfabet: 1"
 * Input :: "c" Output :: "Posisi alfabet: 3"
 * Catatan: Hanya huruf kecil yang diuji.
 */

// npx vitest run latihan-1/2_temukan_posisi
function position(character) {
    // Tulis kode disini
    const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for (let i = 0;i < alfabet.length; i++) {
        if (character === alfabet[i]) {
            return `Posisi alfabet: ${i+1}`
        }
    }
}
console.log(position("c"))
export default position
