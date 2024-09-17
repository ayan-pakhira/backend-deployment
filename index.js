//in this program we are just trying to run simple 'hello world' command with the
//help of express.js
//in the below line i have just imported the express
//which is also equivalet to 
//import express from 'express'

//to import the env file in the code
require('dotenv').config()
const express = require('express')

const app = express()

//const port = 4000
//the above line also can be written in the program
//but to keep it safe, or flexible for others, like in other
//computer if this port is not available then someone just can
// change the port from the env file, that is why the port is
// delared in the '.env' file.




app.get('/', (req, res) => {
    res.send('hello world')
})

//in below where the function has declared or called that is a callback function
app.get('/twitter', (req, res) =>{
    res.send("twitter.com")
})

//to recieve the response from the server
app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>chai aur code</h2>")
})

//to print the response in the url
app.listen(process.env.PORT, () => {
    console.log("example app listening on port" )
})


