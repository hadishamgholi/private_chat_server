"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = require('express').Router();
routes.get('/', function (req, res) {
    res.status(200).json({ message: 'Connected!' });
});
module.exports = routes;
