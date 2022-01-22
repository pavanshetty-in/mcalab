const express = require('express');
const path = require('path');
let PORT = process.env.PORT || 3000; // default
const app = express();
const newLocal = './public';
const static_path =path.join(__dirname, newLocal);

app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(express.static(static_path));

app.get('/' || '/get',async(req, res) => {
    try{
        res.sendFile(static_path +'./index.html');
        }
        catch(err){
            console.error(err);
        }
});

app.get('/get/java1',async (req,res) => {
    try{
    res.download(static_path +'/java1.txt','java1.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java2',async (req,res) => {
    try{
    res.download(static_path +'/java2.txt','java2.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java3',async (req,res) => {
    try{
    res.download(static_path +'/java3.txt','java3.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java4',async (req,res) => {
    try{
    res.download(static_path +'/java4.txt','java4.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java5',async (req,res) => {
    try{
    res.download(static_path +'/java5.txt','java5.txt');
    }
    catch(err){
        console.error(err);
    }
});

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});
