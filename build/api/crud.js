"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../entity/user");
// const routes = require('express').Router();
// routes.get('/read', (req: Request, res: Response) => {
//   res.status(200).json({ message: 'Connected!' });
// });
// module.exports = routes;
var CrudRoute = /** @class */ (function () {
    function CrudRoute(connection) {
        this.conn = connection;
        this.route = express_1.Router();
    }
    CrudRoute.prototype.createRoute = function () {
        var _this = this;
        this.route.get('/create', function (req, res) {
            var user = new user_1.User();
            user.nationalId = 'A Todo';
            _this.conn.manager.save(user).then(function (user) {
                res.send(user);
            });
        });
        this.route.get('/read', function (req, res) {
            var users = _this.conn.manager.find(user_1.User);
            users.then(function (users) {
                console.log("todos : " + users);
                res.send(users);
            });
        });
        return this.route;
    };
    return CrudRoute;
}());
exports.CrudRoute = CrudRoute;
