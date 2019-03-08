"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chat = /** @class */ (function () {
    function Chat(io) {
        this.io = io;
        this.listen();
    }
    Chat.prototype.listen = function () {
        this.io.on('connection', function (socket) {
            console.log("Connected succesfully to the socket ...");
            // Send news on the socket
            socket.emit('message', "msg from server");
            socket.on('message', function (data) {
                console.log("from client: " + data);
            });
        });
    };
    return Chat;
}());
exports.Chat = Chat;
