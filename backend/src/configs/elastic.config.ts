import { Client, ClientOptions } from "@elastic/elasticsearch";

const elasticConfigs: ClientOptions = {
  node: process.env.ELASTIC_NODE || "http://localhost:9200",
  name: "ou-insight-hub-es-client",
  maxRetries: 3,
  requestTimeout: 10000,
  sniffInterval: 60000,
  sniffOnStart: true,
  sniffOnConnectionFault: true,
  compression: true,
};

export const elasticClient = new Client(elasticConfigs);