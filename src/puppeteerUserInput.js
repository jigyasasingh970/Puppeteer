const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
var mysqlConnection=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:'root',
    password:'Chiy@1100',
    database:'mydb',
    multipleStatements:true
});
mysqlConnection.connect((err)=>{
    if(!err)
    {
    console.log('Db connection succeeded');
    }
    else
    {
    console.log(err);
    console.log('db connection failed');
}
})
//get all codes
app.listen(3000,()=>console.log("Express server is running at Port no:3000"));
app.get('/codes', (req,res)=>{
    mysqlConnection.query('SELECT * FROM codemap',(err,rows,fields)=>{
        if(!err){
        console.log(rows);
       // res.send(rows);
        }
        else
        console.log(err);
    })
    res.send('welcome');
});
//get a code
app.get('/codes/:id', (req, res) => {
    mysqlConnection.query('SELECT code FROM codemap WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err){
            console.log(rows)
            var obj = JSON.stringify(rows);
            console.log(obj)
            var code1=rows[0].code;
            console.log(code1) //extracting the code successful
            const puppeteer = require('puppeteer');
            (async () => {
              const browser = await puppeteer.launch();
              const page = await browser.newPage();
              //setting up the so called listener
               page.on('console', msg => {
                for (let i = 0; i < msg._args.length; ++i)
                console.log(`${i}: ${msg._args[i]}`);
            });
              await page.evaluate(code1);
              await browser.close();
            })();

                res.send('Code executed');
        }
        else
            console.log(err);
    })
});
//add a code
app.post('/codes', (req, res) => {
    let codmp = req.body;
  var sql = "INSERT INTO codemap(id,code) VALUES(?,?)";
    mysqlConnection.query(sql, [codmp.id, codmp.code], (err, rows, fields) => {
        if (!err){
          res.send('CODE ADDED');
           }
        else
            console.log(err);
    })
});
