import { Server, Socket } from "socket.io";

export class Chat{

    private io: Server;

    constructor(io:Server){
        this.io = io
        this.listen()
    }

    listen(): void {
        this.io.on('connection', function (socket: Socket) {
            console.log("Connected succesfully to the socket ...");
        
        
            // Send news on the socket
            socket.emit('message', "msg from server");
        
            socket.on('message', function (data: string) {
                console.log("from client: " + data);
            });
        });
    }
}