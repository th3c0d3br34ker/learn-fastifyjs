"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFruit = exports.getFruit = exports.getFruits = void 0;
const data_json_1 = require("../data.json");
const getFruits = () => {
    return {
        message: "Fruits sent successfully",
        data: { fruits: data_json_1.fruits },
    };
};
exports.getFruits = getFruits;
const getFruit = (req) => {
    const { name } = req.params;
    const fruit = data_json_1.fruits.find((item) => item.name === name);
    if (fruit) {
        return {
            message: `Fruit ${name} found`,
            data: { fruit },
        };
    }
    else {
        return { success: false, message: "No fruit found!" };
    }
};
exports.getFruit = getFruit;
const addFruit = (req, res) => {
    const { fruit } = req.body;
    const item = {
        id: data_json_1.fruits.length,
        ...fruit,
    };
    return { data: { fruit } };
};
exports.addFruit = addFruit;
