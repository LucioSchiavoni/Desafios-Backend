const e = require("express");
let { Server: SocketIo } = require("socket.io");

class Socket {
    static instancia;
    constructor(http) {
        if (Socket.instancia) {
            return Socket.instancia;
        }
        Socket.instancia = this;
        this.io = new SocketIo(http);
        this.mensajes = [];
        this.usuarios = [];

    }
    init() {
        try {
            this.io.on("connection", socket => {
                console.log("usuario conectado");
                socket.emit("init", this.mensajes)

                socket.on("mensaje", data => {
                    this.mensajes.push(data)
                    this.io.sockets.emit("listenerserver", data);

                    socket.on("addUser", data => {
                        console.log("data")
                        if (this.usuarios.length) {
                            let verificacion_user = false;
                            this.usuarios = this.usuarios.map(usuario => {
                                if (usuario.email == data.email) {
                                    verificacion_user = true;
                                    return {
                                        id: socket.id,
                                        ...data,
                                        active: true
                                    }
                                } else {
                                    return usuario;
                                }
                            })
                        }

                        this.io.sockets.emit("loadUser", data);
                    });


                    socket.on("disconnect", data => {
                        console.log("se desconecto", socket.id);
                    })


                })

            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Socket;