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
app.get('/get/java6',async (req,res) => {
    try{
    res.download(static_path +'/java6.txt','java6.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java8',async (req,res) => {
    try{
    res.download(static_path +'/java8.txt','java8.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java9',async (req,res) => {
    try{
    res.download(static_path +'/java9.txt','java9.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java11',async (req,res) => {
    try{
    res.download(static_path +'/java11.txt','java11.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/get/java13',async (req,res) => {
    try{
    res.download(static_path +'/java13.txt','java13.txt');
    }
    catch(err){
        console.error(err);
    }
});

app.get('/iot1',async (req,res) => {
    try{
    res.download(static_path +'/iot1.txt','iot1.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot2',async (req,res) => {
    try{
    res.download(static_path +'/iot2.txt','iot2.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot3',async (req,res) => {
    try{
    res.download(static_path +'/iot3.txt','iot3.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot4',async (req,res) => {
    try{
    res.download(static_path +'/iot4.txt','iot4.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot5',async (req,res) => {
    try{
    res.download(static_path +'/iot5.txt','iot5.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot6',async (req,res) => {
    try{
    res.download(static_path +'/iot6.txt','iot6.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot7',async (req,res) => {
    try{
    res.download(static_path +'/iot7.txt','iot7.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot8',async (req,res) => {
    try{
    res.download(static_path +'/iot8.txt','iot8.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/iot9',async (req,res) => {
    try{
    res.download(static_path +'/iot9.txt','iot9.txt');
    }
    catch(err){
        console.error(err);
    }
});

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});
