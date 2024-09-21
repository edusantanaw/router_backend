import { Client } from "@elastic/elasticsearch";
import dotenv from "./dotenv";

dotenv();

const HOST = process.env.ELASTIC_HOST;

const client = new Client({
  node: HOST,
});

client.search({
  index: "customers",
});

export default client;
