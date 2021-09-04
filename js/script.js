function ganti() {
    let $sumber = document.getElementById('sumber').value;
    let $hasil = document.getElementById('hasil');

let $baris1 = ['h','n','c','r','k'];
let $baris2 = ['d','t','s','w','l'];
let $baris3 = ['p','dh','j','y','ny'];
let $baris4 = ['m','g','b','th','ng'];

// Sumber = dagadu
// Hasil = matamu

let $hasilKebalikan = "";
let $index_baris1 = "";
let $index_baris2 = "";
let $index_baris3 = "";
let $index_baris4 = "";
let $potongan2huruf = "";
let $index_baris3_2huruf = "";
let $index_baris4_2huruf = "";

$sumber = $sumber.toLowerCase();

let $pecahSumber = $sumber.split("");
for($i = 0; $i < $pecahSumber.length; $i++) {
    $index_baris1 = $baris1.indexOf($pecahSumber[$i].toLowerCase());
    $index_baris2 = $baris2.indexOf($pecahSumber[$i].toLowerCase());
    $index_baris3 = $baris3.indexOf($pecahSumber[$i].toLowerCase());
    $index_baris4 = $baris4.indexOf($pecahSumber[$i].toLowerCase());

    $potongan2huruf = $sumber.slice($i, $i + 2);
    $index_baris3_2huruf = $baris3.indexOf($potongan2huruf);
    $index_baris4_2huruf = $baris4.indexOf($potongan2huruf);


    // $hasilKebalikan = $hasilKebalikan + $index_baris1;
    if($index_baris3_2huruf >= 0){
        $hasilKebalikan = $hasilKebalikan + $baris1[$index_baris3_2huruf];
        $i = $i + 1;
    } else if($index_baris4_2huruf >= 0){
        $hasilKebalikan = $hasilKebalikan + $baris2[$index_baris4_2huruf];
        $i = $i + 1;
    }else if($index_baris1 >= 0) {
        $hasilKebalikan = $hasilKebalikan + $baris3[$index_baris1];
    } else if($index_baris2 >= 0) {
        $hasilKebalikan = $hasilKebalikan + $baris4[$index_baris2];
    } else if($index_baris3 >= 0) {
        $hasilKebalikan = $hasilKebalikan + $baris1[$index_baris3];
    } else if($index_baris4 >= 0) {
        $hasilKebalikan = $hasilKebalikan + $baris2[$index_baris4];
    } else {
        $hasilKebalikan = $hasilKebalikan + $pecahSumber[$i];
    }
}

$hasil.value = $hasilKebalikan;
}