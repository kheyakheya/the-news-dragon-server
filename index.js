const express=require('express');
const app=express();
const port= process.env.port || 5000;
const categories= require('./data/categories.json')
const cors=require('cors');
app.use(cors());
app.get('/', (req,res)=>{
    res.send('dragon is running')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>{
    console.log(`dragon API is running on ${port}`)
})
