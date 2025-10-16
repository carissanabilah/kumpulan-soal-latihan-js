/**
 * Bisakah kamu menemukan jarum di tumpukan jerami?
 * Tulis fungsi findNeedle() yang menerima parameter array berisi kumpulan string tetapi berisi satu string "jarum".
 * Setelah fungsi Anda menemukan jarum, fungsi tersebut akan mengembalikan pesan (dalam bentuk string) yang berbunyi:
 *
 * ? contoh: ["jerami", "sampah", "jerami", "jerami", "sampah lainnya", "jarum", "sampah acak"] --> "menemukan jarum di posisi 5"
 */

// npx vitest run latihan-1/1_jarum_ditumpukan_jerami
function findNeedle(tumpukan_jerami) {
    // Tulis kode disini

    for (let i = 0;i < tumpukan_jerami.length; i++) {
        if (tumpukan_jerami[i] === "jarum") {
            return `menemukan jarum di posisi ${i}`
        }
    }
}

export default findNeedle
