"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const PORT = process.env.PORT || 5000;
const routes_1 = require("./routes");
const logger_1 = require("./utils/logger");
const server = fastify_1.default({
    logger: logger_1.logger,
});
server.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "Fastify API" },
    },
});
server.register(routes_1.fruitsRoute);
const start = async () => {
    try {
        await server.listen(PORT);
    }
    catch (error) {
        console.log(error);
        server.log.error("Error: ", error);
    }
};
start();
