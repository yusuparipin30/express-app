//pertama-tama ketik perintah "npm init -y" pada terminal
//Perintah tersebut akan membuat sebuah file bernama “package.json” di dalam folder “express-app”.

//File ini “package.json” berisi semua informasi dependensi dan package yang kita gunakan dalam membangun aplikasi

//Selanjutnya, install express dengan mengetikan perintah berikut pada terminal: npm install express

//Jika membuka file “package.json”, maka akan terlihat ada penambahan dependensi yaitu “express” yang barusaja di instal

/*Selain itu juga terdapat penambahan folder “node_modules” didalam folder “express-app”.
Pada tahap ini,telah berhasil menginstal express. */

//mengimport express
import express from "express";
 
// menginisiasi init express
const app = express();
 
// Kemudian membuat route dasar dengan kode /basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});
 
// Dan menjalankan server pada port 3000 dengan kode berikut:
//Untuk menjalankan server, Anda dapat mengetikan perintah berikut pada terminal gitbase "node index"
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));

//Pada segmen diatas,telah membuat sebuah route yaitu untuk menampilkan pesan “Hello World”.