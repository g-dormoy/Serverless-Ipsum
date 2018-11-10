"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loremIpsum = require("lorem-ipsum");
const lorem = (event, context, callback) => {
    const res = {
        statusCode: 200,
        body: JSON.stringify({
            message: loremIpsum()
        })
    };
    callback(undefined, res);
};
exports.lorem = lorem;
