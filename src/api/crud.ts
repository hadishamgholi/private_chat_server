import { Request, Response, Router } from "express";
import { Connection } from "typeorm";
import { User } from "../entity/user";


export class CrudRoute{
    private conn : Connection
    private route : Router
    constructor(connection: Connection){
        this.conn = connection;
        this.route = Router()
    }

    public createRoute(){

        this.route.get('/create', (req, res) => {
            const user = new User();
            user.nationalId = 'A Todo';
            this.conn.manager.save(user).then((user) => {
                res.send(user);
            });
        })

        this.route.get('/read', (req, res) => {
            const users = this.conn.manager.find(User);
            users.then((users) => {
                console.log("todos : " + users)
                res.send(users);
            })
            
        })

        return this.route
        
    }
}