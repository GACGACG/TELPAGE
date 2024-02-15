import mysql from "mysql2/promise";
<<<<<<< HEAD


const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'BD',
  });
=======
>>>>>>> bdf384fc683bd845b3525d02ddf2f4b6ba0b53e4


const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'BD',
  });


export default connection;
