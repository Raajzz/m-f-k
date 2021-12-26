const express = require('express');
const app = express();

const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "fff_project",
  password: "",
});

app.get("/", (req, res) => {
  con.query(
    'INSERT INTO userDetails VALUES("secondrow","https://www.npmjs.com/package/mysql2","M")',
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  con.query(
    'INSERT INTO userAbout VALUES("secondrow","Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium delectus nihil consequatur deleniti, velit saepe unde maxime veniam dolorum.")',
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  con.query('INSERT INTO userFFF VALUES("secondrow",0,0,0)', (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

