// import {Chat} from './chat'
// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var testApi = require('./api/test')

// app.get('/', testApi)

// var chat : Chat = new Chat(io);

// var server = http.listen(3001, () => {
//     console.log('server is running on port', server.address().port);
// });


import express from 'express';
import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import {User} from './entity/user';
import { CrudRoute } from './api/crud';

createConnection().then(
    main
    ).catch((error) => console.log(error));




    
async function main(connection : Connection) {
        const app = express();
        const crudRoute = new CrudRoute(connection).createRoute();
        // app.get('/create', async (req, res) => {
        //   const user = new User();
        //   user.nationalId = 'A Todo';
        //   await connection.manager.save(user);
        //   res.send(user);
        // });
        // app.get('/read', async (req, res) => {
        //   const todos = await connection.manager.find(User);
        //   res.send(todos);
        // });
        app.use('/', crudRoute);
        app.listen(3000, () => console.log('Example app listening on port 3000!'));
}