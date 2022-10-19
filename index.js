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