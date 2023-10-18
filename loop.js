//  5 objek Provinsi Di Indonesia
const bangka_belitung = {
    ibu_kota : "Pangkal Pinang",
    jumlah_penduduk : "278,69 juta jiwa",
    bahasa : "Melayu"
}

const sumatra_selatan = {
    ibu_kota : "Palembang",
    jumlah_penduduk : " 1.707.996 jiwa",
    bahasa : " Melayu, ada Lematang, Komering, Kayuagung, Ogan, dan bahasa Pedamaran"
}

const riau = {
    ibu_kota : "Pekan Baru",
    jumlah_penduduk : " 6.735.329 jiwa",
    bahasa : " Melayu"
}

const nanggroe_aceh_darussalam = {
    ibu_kota : "Banda Aceh",
    jumlah_penduduk : " 5.333.733,00 jiwa",
    bahasa : " Aceh, Tamiang, Gayo"
}

const jawa_timur = {
    ibu_kota : "Surabaya",
    jumlah_penduduk : "  41,15 juta jiwa",
    bahasa : " Jawa"
}

// Panggil objek menggunakan for in
for(indo in bangka_belitung) {
    console.log(indo + '=' + bangka_belitung[indo])
}

for(indo in sumatra_selatan) {
    console.log(indo + '=' + sumatra_selatan[indo])
}

for(indo in riau) {
    console.log(indo + '=' + riau[indo])
}

for(indo in nanggroe_aceh_darussalam) {
    console.log(indo + '=' + nanggroe_aceh_darussalam[indo])
}

for(indo in jawa_timur) {
    console.log(indo + '=' + jawa_timur[indo])
}

// Panggil array menggunakan for of
const indonesia = [bangka_belitung, sumatra_selatan, riau, nanggroe_aceh_darussalam, jawa_timur]

for (indo of indonesia) {
    console.log(indo.ibu_kota);
}


