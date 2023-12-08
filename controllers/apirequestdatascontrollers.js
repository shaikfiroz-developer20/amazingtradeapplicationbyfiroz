 import axios from "axios";

 const newsdatafeed= async (req,res )=>{

    try {
      const ress=await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
      const data=ress.data.Data;
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      res.json({errormsg:error})
    }
  }
  

const datacandlestickdata=async(req,res)=>{
    const {timef,crypto}=req.query;
  
    try {
      const response=await axios.get(`https://min-api.cryptocompare.com/data/v2/${timef}?fsym=${crypto}&tsym=USD&limit=1000`);
      const resdata=response.data;
      res.status(200).json(resdata);
    } catch (error) {
      console.log(error);
    }
  
  }
  
  
  const miningearnpools=async(req,res) =>{
  
    const apikey=process.env.ApiKey;
  try {
     const ress=await axios.get(`https://min-api.cryptocompare.com/data/mining/pools/general?api_key=`+apikey);
   const deta=ress.data.Data;
     res.status(200).json(deta)
  } catch (error) {
    console.log(error);
  }
  }
  
 
  
  
  const reqcrypto=async(req,res) =>{
    const crypto=req.query.crypto;
    try {
      const ress=await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=USD`)
      res.status(200).json(ress.data)
    } catch (error) {
      
    }
  }
  
  const orderbookdataofpresentcrypto=async(req,res) =>{
  
  try {
    const response=await axios.get(`https://min-api.cryptocompare.com/data/v2/ob/l2/snapshot?api_key=9511b9b218c09cc2c360c48aa4a06e71e5488e8874d9aeb8eef0871864cd19d1`)
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500)
  }
  
  }
  
  const topvolume=async(req,res)=>{
    try {
      const resp=await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=4&tsym=USD`);
      const data1=resp.data.Data
      res.json({data:data1})
    } catch (error) {
      console.log(error);
    }
  }
  
  const trendingcoin=async(req,res)=>{
    try {
      const resp=await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=4&tsym=USD`);
      const data1=resp.data.Data
      res.json({data:data1})
  
    } catch (error) {
      console.log(error);
    }
  }
  
  
  const topgainers=async(req,res)=> {
    try {
      const resp=await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=4&tsym=USD`);
     const  data1=resp.data.Data
      res.json({data:data1})
    } catch (error) {
      console.log(error);
    }
  }
  
  const topcryptosprices=async(req,res)=> {
  
    const count =req.query.count;
   var cc=parseInt(count);
     try {
       const resp=await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${cc}&tsym=USD`)
       const data1=resp.data.Data;
       res.status(200).json({ data: data1 });
     } catch (error) {
       console.log(error);
     }
   }
   
   
  
   const toploosers=async(req,res)=> {
    try {
      const resp=await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=4&tsym=USD`);
   const data1=resp.data.Data
  res.json({data:data1})
    } catch (error) {
      console.log(error);
    }
  }
  
  
  const toppairsbyvolume=async(req,res)=>{
    const {fysm}=req.query;
    try {
      const reqd=await axios.get(`https://min-api.cryptocompare.com/data/top/pairs?limit=10&fsym=${fysm}`);
      const ress=reqd.data.Data;
  res.json(ress)  
  }
  catch (error) {
      console.log(error)
      res.status(500)
    }
  
  }
      

  export {newsdatafeed,orderbookdataofpresentcrypto,topvolume,datacandlestickdata,miningearnpools,reqcrypto,topgainers,trendingcoin,topcryptosprices,toppairsbyvolume,toploosers};