function ambilForEach() {
    var kalimat = "Saya Ingin Belajar Bersama"
    var konversi = kalimat.split(' ', 4)
    konversi.forEach(function (item, index) {
        console.log("Item : ", item, "Index ke ", index)
    })

}
ambilForEach()