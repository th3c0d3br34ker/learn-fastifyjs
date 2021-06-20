import fastify from "fastify";

const PORT = process.env.PORT || 5000;

import { fruitsRoute } from "./routes";
import { logger } from "./utils/logger";

const server = fastify({
  logger,
});

server.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "Fastify API" },
  },
});
server.register(fruitsRoute);

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    console.log(error);
    server.log.error("Error: ", error);
  }
};

start();
