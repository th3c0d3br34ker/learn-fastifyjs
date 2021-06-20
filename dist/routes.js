"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitsRoute = void 0;
const fruits_1 = require("./controllers/fruits");
const getDefaultOptions = {
    schema: {
        response: {
            200: {
                type: "object",
                properties: {
                    success: { type: "boolean", default: true },
                    message: { type: "string" },
                    error: { type: "string", default: "" },
                },
            },
        },
    },
    handler: () => {
        // Old method
        // res.send({ success: true, message: "OK" });
        // New method
        return { message: "OK" };
    },
};
// Fruit schema
const Fruit = {
    type: "object",
    properties: {
        id: { type: "integer" },
        name: { type: "string" },
        value: { type: "string" },
    },
};
const getFruitsOptions = {
    schema: {
        response: {
            200: {
                type: "object",
                properties: {
                    success: { type: "boolean", default: true },
                    message: { type: "string" },
                    error: { type: "string", default: "" },
                    data: {
                        type: "object",
                        properties: {
                            fruits: {
                                type: "array",
                                items: Fruit,
                            },
                        },
                    },
                },
            },
        },
    },
    handler: fruits_1.getFruits,
};
const getFruitOptions = {
    schema: {
        response: {
            200: {
                type: "object",
                properties: {
                    success: { type: "boolean", default: true },
                    message: { type: "string" },
                    error: { type: "string", default: "" },
                    data: {
                        type: "object",
                        properties: {
                            fruit: Fruit,
                        },
                    },
                },
            },
        },
    },
    handler: fruits_1.getFruit,
};
const postFruitOptions = {
    schema: {
        body: {
            type: "object",
            required: ["fruit"],
            properties: {
                fruit: {
                    type: "object",
                    required: ["name", "value"],
                    properties: {
                        name: { type: "string" },
                        value: { type: "string" },
                    },
                },
            },
        },
        response: {
            201: {
                type: "object",
                properties: {
                    success: { type: "boolean", default: true },
                    message: { type: "string" },
                    error: { type: "string", default: "" },
                    data: {
                        type: "object",
                        properties: {
                            fruit: Fruit,
                        },
                    },
                },
            },
        },
    },
    handler: fruits_1.addFruit,
};
const fruitsRoute = (app, options, done) => {
    app.get("/", getDefaultOptions);
    app.get("/fruits", getFruitsOptions);
    app.get("/fruits/:name", getFruitOptions);
    app.post("/fruits", postFruitOptions);
    done();
};
exports.fruitsRoute = fruitsRoute;
