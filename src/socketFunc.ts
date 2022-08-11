import { ModeEnum } from "./App";
import { SocketType } from "./interface";
import { ModeInviteEnum } from "./Mode/ChooseFriend";
import Setters from "./Setters";
import { user } from "./utils";

export const acceptPseudo = (socket: SocketType) => (pseudo: string) => {
    if (Setters.setMode) {
        Setters.setMode(ModeEnum.ChooseFriend);
        user.pseudo = pseudo;
    }
};

export const updateUser = (socket: SocketType) => (pseudos: string[]) => {
    if (Setters.setPseudos) {
        Setters.setPseudos(pseudos.filter((pseudo) => user.pseudo !== pseudo));
    }
};

export const requestUser = (socket: SocketType) => (pseudo: string) => {
    if (Setters.setOtherPseudo && Setters.setModeInvite) {
        Setters.setOtherPseudo(pseudo);
        Setters.setModeInvite(ModeInviteEnum.Response);
    }
};

export const cancelRequest = (socket: SocketType) => () => {
    if (Setters.setOtherPseudo && Setters.setModeInvite) {
        Setters.setOtherPseudo("");
        Setters.setModeInvite(ModeInviteEnum.Null);
    }
};

export const declineRequest = (socket: SocketType) => () => {
    if (Setters.setOtherPseudo && Setters.setModeInvite) {
        Setters.setOtherPseudo("");
        Setters.setModeInvite(ModeInviteEnum.Null);
    }
};
