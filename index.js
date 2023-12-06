import {WebSocketServer,WebSocket} from 'ws';
import express, { json } from "express";
import { app, corop } from "./middlewares/middleconfig.js";
import mongoose from "mongoose";
import { signuproute } from "./routes/signuploginroutes.js";
import axios from "axios";
import dotenv from "dotenv"

dotenv.config();

const port=process.env.PORT;

import newsfeedapireq from './routes/apirequestdatas.js';
// Apply the express.json() middleware before defining routes
app.use(express.json());

// mongoose connection
const mongconnection=process.env.DB_URI;
mongoose.connect(mongconnection)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((e) => {
    console.log(e);
  });


   // Define the "/signup" route
app.post("/signup", corop, signuproute);
app.post("/login", corop, signuproute);


app.get('/newsdatafeed', corop, newsfeedapireq);
app.get('/orderbookdataofpresentcrypto', corop, newsfeedapireq);
app.get('/topvolume', corop, newsfeedapireq);
app.get('/datacandlestickdata', corop, newsfeedapireq);
app.get('/miningearnpools', corop, newsfeedapireq);
app.get('/reqcrypto', corop, newsfeedapireq);
app.get('/topgainers', corop, newsfeedapireq);
app.get('/trendingcoin', corop, newsfeedapireq);
app.get('/topcryptosprices', corop, newsfeedapireq);
app.get('/toppairsbyvolume', corop, newsfeedapireq);
app.get('/toploosers', corop, newsfeedapireq);



app.listen(port, () => {
  console.log(`Listening on ${port} `);
});


const server = new WebSocketServer({ port: 8001 });


server.on("connection", (ws) => {
    console.log("Client connected");

    ws.send("Welcome to the server WebSocket");

    ws.on("message", (message) => {
        ws.send(`Your message is: ${message}`);
    });

      ws.on("close", () => {
        console.log("Client disconnected");
    });
});

