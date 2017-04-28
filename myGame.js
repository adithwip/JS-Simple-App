//MyApp-The Journey of Conship Kingdom (PROTOTYPE)

//Level-0(INTRODUCTION)
//-------------------------------------------------If-else condition------------//

//----------------------------------Pseudocode----------------------------------//

//MINTA dan SAVE nama pemain
//MINTA dan SAVE peran yang diinginkan pemain
//TAMPILKAN hasil jika pemain menginput nama dan peran
//TUNJUKKAN pesan jika pemain belum menginput nama dan peran
//TAMPILKAN pesan jika pemain sudah melewati level-0

alert('Hai manusia! Apakah kamu tahu sekarang kamu ada dimana?');

var pertanyaan = prompt('Ya atau Tidak');

//----------Conditional If-else

if (pertanyaan == 'Ya'){
  alert('Loh, kamu tau dari mana? Padahal belum aku beri tahu. Yauwis...');
}
else {
  alert('Sekarang kamu sedang di ruang administrasi Conship Kingdom. Memang nggak kelihatan tulisan di depan pintu?');
}

var nama = prompt('Hi, manusia! Siapa namamu?');
alert('Aku ingin tahu, apa pekerjaanmu?');
var peran = prompt('Apa pekerjaanmu?(Pilih antara: \nDeveloper,\nDesigner,\natau Modeller)\nTulis huruf lengkap dengan Kapital.');

//conditional nama

if (nama == '') {
  alert("Nama tidak boleh kosong");
}
else {
  alert("Selamat datang di dunia Conship Kingdom, " + nama);
}

//unconditional
if (peran == '') {
  alert("Pilih peranmu untuk memulai game. Kamu bisa memilih: 1) Ksatria\n2) Tabib\n3)Penyihir");
}

//conditional Developer
if (peran == 'Developer') {
  alert("Halo " + peran + " " + nama + ", senang bertemu denganmu. Ajari aku JavaScript kapan2, ya!");
}

//conditional Designer
if (peran == 'Designer') {
  alert("Halo " + peran + " " + nama + ", pasti kamu jago Adobe CC, ya?");
}

// conditional Modeller
if (peran == 'Modeller') {
  alert("Halo " + peran + " " + nama + ", kamu bekerja sebagai designer transportasi, ya?");
}

alert('Seru sekali, ternyata pekerjaanmu sangat hebat!');
alert('Ayo kita ngobrol2 lagi, ' + nama );

//Dialog dalam "permainan"

//Level-1(THE DIALOGUE)
//----------------------------------Object dan Constructor Function-------------//

//----------------------------------Pseudocode----------------------------------//

//MINTA dan SIMPAN nama pemain sebagai parameter OBJECT pada constructor function
//MINTA dan SIMPAN kepada pemain untuk memanggil NPC dengan nama pada parameter
//MINTA semua parameter saat melakukan instantiate
//TAMPILKAN dialog sesuai dengan parameter yang sudah diinput saat instantiate
//LAKUKAN obrolan hingga selesai

//----------Constructor function

function Player(name,asal,kekuatan){
  this.name = name;
  this.asal = asal;
  this.kekuatan = kekuatan;
}

//Dialog-1
  alert('Sesuai prosedur kerajaan, kau harus memberiku nama. Karena aku tidak bisa memberitahukan namaku kepadamu');
var npc = new Player(prompt('Berikan aku nama, wahai manusia'),'Alderaan','Mengobrol');
  alert('Hi, manusia. Sesuai permintaanmu, namaku adalah ' + npc.name);
  alert('Aku berasal dari sebuah planet bernama ' + npc.asal +'. Ya, planet yang sangat jauh. Aku suka '+ npc.kekuatan);
  alert('Psst, apakah kamu tahu kalau aku bertetangga dengan Princess Leia?');
  alert('Oops, sepertinya aku keceplosan. Terlalu banyak informasi yang kuceritakan');

var reaksiPemain1 = prompt('Pilih reaksi dan tulis nomornya saja: 1. Dasar tukang ledeng!\n2. Tampar aku, mas!\n3. Diam saja');

if (reaksiPemain1 = '1'){
  alert('Kamu suka nonton Fluxcup, ya?');
}
else{
  alert('Kamu pendiam, ya?');
}

//Dialog-2
var pemain = new Player(prompt('Hi, manusia. Boleh aku tahu lagi namamu?'),prompt('Boleh aku tahu dari mana asalmu?'),prompt('Boleh aku tahu apa kekuatanmu?'));
alert('Hi, ' + pemain.name +'. Maaf, belum2 aku sudah melupakan namamu');
alert('Wah, ternyata kamu datang dari planet ' + pemain.asal +'. Cukup jauh, ya!');
alert('Ternyata kamu ahli ' + pemain.kekuatan +', ya. Hebat sekali!');

//Dialog-3
alert('Ehem, oke ' + pemain.name);
alert('Sekarang aku ingin mengetahui infomu secara lengkap. Aku ingin mengetahui beberapa hal');

//Leve-2(THE INFORMATION THAT NEEDED TO...)
//------------------------------------------------Array dan Looping-------------//

//----------------------------------Pseudocode----------------------------------//

//MINTA dan SIMPAN beberapa value yang akan menjadi data ARRAY
//BUAT sebuah fungsi yang berisikan LOOPING dari data ARRAY
//TAMPILKAN sebuah console.log berupa informasi yang diinput pada ARRAY
//LANJUTKAN dialog hingga selesai

//Dialog-4
alert('Tolong jawab semua pertanyaanku, ya!');

//----------Array dan Looping (for)

var input = [
                [prompt('Siapa nama lengkapmu?'), prompt('Tempat dan tanggal lahirmu?'), prompt('Kesukaanmu?')],
                [prompt('Siapa nama lengkap Ibumu?'), prompt('Tempat dan tanggal lahir Ibumu??'), prompt('Kesukaan Ibumu?')]
            ]


function dataHandling(){

  for (var i = 0; i < input.length; i++){
    console.log('Nama Lengkap: ' + input[i][0]);
    console.log('TTL: ' + input[i][1] + " " + input[i][2]);
    console.log('Hobi: ' + input[i][3]);
    console.log('    ');
  }

}

dataHandling();

alert('Hi, ' + pemain.name + '. Biodatamu sudah saya simpan di database BANK EVIL CONSHIP KINGDOM INSURANCE CO. LTD. TERBUKA! Lihatlah di console!');
alert('Wow! Cukup panjang juga obrolan kita, ' + pemain.name);
alert('Apa kamu tidak sadar, ' + pemain.name +'?');
alert('Kalau sebenarnya, namaku bukanlah ' + npc.name);
alert('Lagian, nama jelek macam apa itu!');
alert('Namaku adalah Sentolop Daging!');
alert('Aku adalah agen asuransi. Dan kamu telah secara tidak sadar bergabung menjadi nasabah kami!');
alert('Muwahahahaha!');
alert('Hey, dari tadi kau diam saja? Pasti kamu kaget kan sama \'Plot-twist\'-ku');

var pertanyaan2 = prompt('Pilih reaksi dan tulis nomornya saja: 1. Pasrah dan terima saja apa yang sudah terjadi\n2. Gorok lehernya dan kabur!');

//----------Conditional If-else

if (pertanyaan2 == '1'){
  alert('Muwahahahahaha, memang akhir-akhir ini gampang sekali memprospek nasabah! Muwakakakweka');
}
if (pertanyaan2 == '2'){
  alert('Goooorrrkkkhhhhh....kkrrhhakkhhh...croooottttt...criiittttt....arghhh leherku! Bi...adab...kau...' + pemain.name + '!');
}

alert('TAMAT');

alert('Saatnya After-credit');
alert('Dalam game sederhana ini, melibatkan penggunaan:\n1. Kondisional(if-else)\n2. Array dan looping\n3. Object dan constructor function\n4. Pseudocode ada disetiap level');
