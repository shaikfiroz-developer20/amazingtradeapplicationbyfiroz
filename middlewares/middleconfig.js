import express from "express";
import cors from "cors";


const app=express();
app.use(cors());


const corsOptions = {
    origin: 'https://cryptoexchangex.onrender.com',

    optionsSuccessStatus: 200
  }

  const corop=cors(corsOptions);

  export {app,corop};