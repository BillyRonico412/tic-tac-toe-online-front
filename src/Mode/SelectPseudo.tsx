import { useState } from "react";
import SocketImpl from "../SocketImpl";

const SelectPseudo = () => {
    const [pseudo, setPseudo] = useState("");
    const actionOnSubmitPseudo = () => {
        if (SocketImpl.socket) {
            SocketImpl.socket.emit("addPseudo", pseudo);
            console.log("addPseudo");
        }
    };
    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-background-2 px-4 py-8 w-full mx-4 flex gap-y-4 flex-col rounded max-w-xl">
                <p className="text-2xl font-black text-center">Your Pseudo</p>
                <input
                    type="text"
                    className="rounded text-lg py-1 text-center text-background-1 font-semibold"
                    placeholder="Billy"
                    value={pseudo}
                    maxLength={10}
                    onInput={(e) => {
                        setPseudo(e.currentTarget.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            actionOnSubmitPseudo();
                        }
                    }}
                />
                <button
                    className="text-lg bg-secondary rounded py-1 font-bold"
                    onClick={actionOnSubmitPseudo}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SelectPseudo;
