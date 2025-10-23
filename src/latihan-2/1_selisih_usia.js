/**
 * Pada pertemuan keluarga tahunan, keluarga biasanya mencari usia anggota keluarga tertua
 * dan usia anggota keluarga termuda, lalu menghitung selisihnya.
 * Anda akan diberikan array berisi usia semua anggota keluarga, dalam urutan apa pun.
 * Usia akan diberikan dalam bilangan bulat, jadi bayi berusia 5 bulan akan memiliki 'usia' yang ditetapkan 0.
 * Kembalikan array baru dengan [usia termuda, usia tertua, selisih antara usia termuda dan tertua].[]
 */

// npx vitest run test/latihan-2/1_selisih_usia
function diffInAges(ages) {
    // Tulis kode disini
    let usia_tertua = ages[0]
    let usia_termuda = ages[0]
    for (let i = 0; i < ages.length; i++) {
        const umur_sekarang = ages[i]
        if (usia_tertua < umur_sekarang) usia_tertua = umur_sekarang
        if (usia_termuda > umur_sekarang) usia_termuda = umur_sekarang
    }

    let selisih_usia = usia_tertua - usia_termuda

    return [usia_termuda, usia_tertua, selisih_usia]
}

export default diffInAges
