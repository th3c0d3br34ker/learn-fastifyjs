# Learn Fastify

[Fastify](https://www.fastify.io/) Fast and low overhead web framework, for Node.js.

These are the main features and principles on which fastify has been built:

- Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30 thousand requests per second.

- Extensible: Fastify is fully extensible via its hooks, plugins and decorators.

- Schema based: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function.

- Logging: logs are extremely important but are costly; we chose the best logger to almost remove this cost, [Pino](https://github.com/pinojs/pino)!

- Developer friendly: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security.

- TypeScript ready: we work hard to maintain a TypeScript type declaration file so we can support the growing [TypeScript](https://www.typescriptlang.org/) community.

---

## Simple Fastify Server

This repository includes simple server made with the framework.

Test URL: `http://localhost:5000/api`

The API has the following routes:

### Base Route

URI: `/`  
Method: `GET`  
Url Params:  
Data Params:  
Success Response:

```json
{
  "success": true,
  "message": "OK",
  "error": ""
}
```

Error Response:

```json
{
  "success": false,
  "message": "",
  "error": "Error message."
}
```

---

### Get Fruits Route

URI: `/fruits`  
Method: `GET`  
Url Params:  
Data Params:  
Success Response:

```json
{
  "success": true,
  "message": "Fruits sent successfully",
  "error": "",

  "error": "",
  "data": {
    "fruits": [
      {
        "id": 0,
        "name": "mango",
        "value": "🥭"
      },
      {
        "id": 1,
        "name": "apple",
        "value": "🍎"
      },
      {
        "id": 2,
        "name": "avocado",
        "value": "🥑"
      }
    ]
  }
}
```

Error Response:

```json
{
  "success": false,
  "message": "",
  "error": "No Fruits found."
}
```

---

### Add Fruits Route

URI: `/fruits`  
Method: `POST`  
Url Params:  
Data Params:

```json
{
  "fruit": {
    "name": "pineapple",
    "value": "🍍"
  }
}
```

Success Response:

```json
{
  "success": true,
  "message": "OK",
  "error": "",
  "data": {
    "fruit": {
      "name": "pineapple",
      "value": "🍍"
    }
  }
}
```

Error Response:

```json
{
  "success": false,
  "message": "",
  "error": "Failed to add fruit."
}
```

---

### Get a Fruit Route

URI: `/fruits/{name}`  
Method: `GET`  
Url Params: `mango`
Data Params:  
Success Response:

```json
{
  "success": true,
  "message": "Fruit mango found",
  "error": "",
  "data": {
    "fruit": {
      "id": "0",
      "name": "mango",
      "value": "🥭"
    }
  }
}
```

Error Response:

```json
{
  "success": false,
  "message": "",
  "error": "Failed to get fruit."
}
```

---

## Installation 🔽

### Clone Repository

```bash
git clone https://github.com/th3c0d3br34ker/learn-fastify.git
cd node-auth-jwt
```

### Install and Run

```bash
npm install
npm run start
# or
npm run start:dev
```

---

### 🚀 References:

1. https://www.fastify.io/docs/latest

---

> Made with 🖤 by Jainam Desai
