const { Console } = require("console");

function datauser(users){
    console.log(`Nama : ${users.nama}`);
    console.log(`Umur : ${users.umur}\n`);
}

module.exports = datauser;