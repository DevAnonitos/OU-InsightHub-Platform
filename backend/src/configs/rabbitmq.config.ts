import amqp, { Channel, Connection, Options } from 'amqplib';

export const rabbitmqConfig = {
  connectOptions: {
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    frameMax: 0,
    heartbeat: 30,
  } satisfies Options.Connect,

  assertQueueOptions: {
    durable: true,
    arguments: { 

    },
  } satisfies Options.AssertQueue,

  assertExchangeOptions: {
    durable: true,
    internal: false,
    autoDelete: false,
    arguments: { 

    },
  } satisfies Options.AssertExchange,

  consumerOptions: {
    noAck: false,
    exclusive: false,
  } satisfies Options.Consume,

  publishOptions: {
    priority: 5,
    persistent: true,
    contentType: "application/json",
  } satisfies Options.Publish,
};

