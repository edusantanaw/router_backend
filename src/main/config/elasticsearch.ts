import { Client } from "@elastic/elasticsearch";
import dotenv from "./dotenv";

dotenv();

const HOST = process.env.ELASTIC_HOST;


const client = new Client({ 
  node: 'http://127.0.0.0:9200'
});

export default client;
