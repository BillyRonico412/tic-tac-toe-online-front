import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
    acceptPseudo: (pseudo: string) => void;
    declinePseudo: (pseudo: string) => void;
    updateUser: (pseudos: string[]) => void;
    requestUser: (pseudo: string) => void;
    cancelRequest: () => void;
    declineRequest: () => void;
}

export interface ClientToServerEvents {
    addPseudo: (pseudo: string) => void;
    getUsers: () => void;
    requestUser: (pseudo: string) => void;
    cancelRequest: (pseudo: string) => void;
    declineRequest: (pseudo: string) => void;
}

export type SocketType = Socket<ClientToServerEvents, ServerToClientEvents>;
