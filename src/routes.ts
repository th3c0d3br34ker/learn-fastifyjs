import { getFruits, getFruit, addFruit } from "./controllers/fruits";

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

  handler: getFruits,
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

  handler: getFruit,
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

  handler: addFruit,
};

export const fruitsRoute = (app: any, options: any, done: any) => {
  app.get("/", getDefaultOptions);

  app.get("/fruits", getFruitsOptions);

  app.get("/fruits/:name", getFruitOptions);

  app.post("/fruits", postFruitOptions);

  done();
};
