import { useEffect, useState } from "react";
import Setters from "../Setters";
import SocketImpl from "../SocketImpl";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaCheck, FaTimes } from "react-icons/fa";

export enum ModeInviteEnum {
    Null,
    Request,
    Response,
}

const ChooseFriend = () => {
    const [pseudos, setPseudos] = useState<string[]>([]);
    const [modeInvite, setModeInvite] = useState<ModeInviteEnum>(
        ModeInviteEnum.Null
    );
    const [otherPseudo, setOtherPseudo] = useState<string>("");
    useEffect(() => {
        Setters.setPseudos = setPseudos;
        Setters.setModeInvite = setModeInvite;
        Setters.setOtherPseudo = setOtherPseudo;

        if (SocketImpl.socket) {
            SocketImpl.socket.emit("getUsers");
        }
    }, []);

    const actionOnChoosePseudo = (pseudo: string) => {
        if (SocketImpl.socket) {
            SocketImpl.socket.emit("requestUser", pseudo);
            setOtherPseudo(pseudo);
            setModeInvite(ModeInviteEnum.Request);
        }
    };

    const actionOnCancel = () => {
        if (SocketImpl.socket) {
            SocketImpl.socket.emit("cancelRequest", otherPseudo);
            setOtherPseudo("");
            setModeInvite(ModeInviteEnum.Null);
        }
    };

    const actionOnDecline = () => {
        if (SocketImpl.socket) {
            SocketImpl.socket.emit("declineRequest", otherPseudo);
            setOtherPseudo("");
            setModeInvite(ModeInviteEnum.Null);
        }
    };

    return (
        <div className="flex justify-center items-center h-full relative">
            <div className="bg-background-2 px-4 py-8 w-full mx-4 flex gap-y-4 flex-col rounded max-w-xl h-96 overflow-auto">
                <p className="text-2xl font-black text-center">
                    Choose your friend
                </p>
                <ul className="flex flex-col gap-y-1">
                    {pseudos.map((pseudo, i) => (
                        <li
                            key={i}
                            className={"flex px-2 py-1 rounded bg-[#0002]"}
                        >
                            <span>{pseudo}</span>
                            <button
                                className="ml-auto bg-primary px-1.5 py-0.5 rounded"
                                onClick={() => actionOnChoosePseudo(pseudo)}
                            >
                                <MdConnectWithoutContact />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {modeInvite !== ModeInviteEnum.Null && (
                <div className="absolute flex justify-center items-center z-10 h-full w-full top-0 left-0 bg-[#000a]">
                    <div className="bg-white w-full max-w-xl mx-4 text-black py-4 rounded">
                        {modeInvite === ModeInviteEnum.Request && (
                            <div className="flex flex-col items-center gap-y-4">
                                <p className="text-center font-black">
                                    Waiting {otherPseudo}...
                                </p>
                                <button
                                    className="bg-secondary px-4 py-1 rounded font-bold text-white"
                                    onClick={() => actionOnCancel()}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                        {modeInvite === ModeInviteEnum.Response && (
                            <div className="flex flex-col items-center gap-y-4">
                                <p className="text-center font-black">
                                    {otherPseudo} invite you
                                </p>
                                <div className="flex gap-x-4">
                                    <button className="px-6 py-1 bg-primary text-white rounded">
                                        <FaCheck />
                                    </button>
                                    <button
                                        className="px-6 py-1 bg-secondary text-white rounded"
                                        onClick={() => actionOnDecline()}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChooseFriend;
