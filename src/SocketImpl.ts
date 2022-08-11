import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./interface";
import { acceptPseudo, cancelRequest, declineRequest, requestUser, updateUser } from "./socketFunc";

class SocketImpl {
    static socket:
        | Socket<ServerToClientEvents, ClientToServerEvents>
        | undefined = undefined;

    static init() {
        if (this.socket === undefined) {
            this.socket = io(import.meta.env.VITE_URL_BACK);
            this.socket.on("acceptPseudo", acceptPseudo(this.socket));
            this.socket.on("updateUser", updateUser(this.socket));
            this.socket.on("requestUser", requestUser(this.socket));
            this.socket.on("cancelRequest", cancelRequest(this.socket));
            this.socket.on("declineRequest", declineRequest(this.socket));
        }
    }
}

export default SocketImpl;
