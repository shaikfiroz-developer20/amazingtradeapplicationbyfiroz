import express from "express";
import cors from "cors";


const app=express();
app.use(cors());


const corsOptions = {
    origin: 'https://tradey-7a150.web.app/',

    optionsSuccessStatus: 200
  }

  const corop=cors(corsOptions);

  export {app,corop};