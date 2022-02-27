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

app.get('/java1',async (req,res) => {
    try{
    res.download(static_path +'/java1.txt','java1.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java2',async (req,res) => {
    try{
    res.download(static_path +'/java2.txt','java2.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java3',async (req,res) => {
    try{
    res.download(static_path +'/java3.txt','java3.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java4',async (req,res) => {
    try{
    res.download(static_path +'/java4.txt','java4.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java5',async (req,res) => {
    try{
    res.download(static_path +'/java5.txt','java5.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java6',async (req,res) => {
    try{
    res.download(static_path +'/java6.txt','java6.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java7',async (req,res) => {
    try{
    res.download(static_path +'/java7.txt','java7.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java8',async (req,res) => {
    try{
    res.download(static_path +'/java8.txt','java8.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java9',async (req,res) => {
    try{
    res.download(static_path +'/java9.txt','java9.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java10',async (req,res) => {
    try{
    res.download(static_path +'/java10.txt','java10.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java11',async (req,res) => {
    try{
    res.download(static_path +'/java11.txt','java11.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java12',async (req,res) => {
    try{
    res.download(static_path +'/java12.txt','java12.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/java13',async (req,res) => {
    try{
    res.download(static_path +'/java13.txt','java13.txt');
    }
    catch(err){
        console.error(err);
    }
});

app.get('/python1',async (req,res) => {
    try{
    res.download(static_path +'/python1.txt','python1.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python2',async (req,res) => {
    try{
    res.download(static_path +'/python2.txt','python2.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python3',async (req,res) => {
    try{
    res.download(static_path +'/python3.txt','python3.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python4',async (req,res) => {
    try{
    res.download(static_path +'/python4.txt','python4.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python5',async (req,res) => {
    try{
    res.download(static_path +'/python5.txt','python5.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python6',async (req,res) => {
    try{
    res.download(static_path +'/python6.txt','python6.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python7',async (req,res) => {
    try{
    res.download(static_path +'/python7.txt','python7.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python10',async (req,res) => {
    try{
    res.download(static_path +'/python10.txt','python10.txt');
    }
    catch(err){
        console.error(err);
    }
});
app.get('/python11',async (req,res) => {
    try{
    res.download(static_path +'/python11.txt','python11.txt');
    }
    catch(err){
        console.error(err);
    }
});

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});
