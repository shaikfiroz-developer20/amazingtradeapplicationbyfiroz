// Import necessary modules and dependencies
import express from 'express';
import { corop } from '../middlewares/middleconfig.js';
import {
  newsdatafeed,
  orderbookdataofpresentcrypto,
  topvolume,
  datacandlestickdata,
  miningearnpools,
  reqcrypto,
  topgainers,
  trendingcoin,
  topcryptosprices,
  toppairsbyvolume,
  toploosers,
} from '../controllers/apirequestdatascontrollers.js';

// Create an instance of the Express router
const newsfeedapireq = express.Router();

// Define routes for each function
newsfeedapireq.get('/newsdatafeed', corop, newsdatafeed);
newsfeedapireq.get('/orderbookdataofpresentcrypto', corop, orderbookdataofpresentcrypto);
newsfeedapireq.get('/topvolume', corop, topvolume);
newsfeedapireq.get('/datacandlestickdata', corop, datacandlestickdata);
newsfeedapireq.get('/miningearnpools', corop, miningearnpools);
newsfeedapireq.get('/reqcrypto', corop, reqcrypto);
newsfeedapireq.get('/topgainers', corop, topgainers);
newsfeedapireq.get('/trendingcoin', corop, trendingcoin);
newsfeedapireq.get('/topcryptosprices', corop, topcryptosprices);
newsfeedapireq.get('/toppairsbyvolume', corop, toppairsbyvolume);
newsfeedapireq.get('/toploosers', corop, toploosers);

// Export the router
export default newsfeedapireq;
