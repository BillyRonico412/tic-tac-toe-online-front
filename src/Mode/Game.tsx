import React, { useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
import Board from "../Components/Board";

enum Turn {
    X,
    O,
}

const Game = () => {
    const [turn, setTurn] = useState<Turn>(Turn.O);
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between w-full">
                    <div className="tracking-widest font-black text-lg font-secondaire w-8">
                        <span className="text-primary">X</span>
                        <span className="text-secondary">O</span>
                    </div>
                    <div className="text-center tracking-wide justify-items-center bg-[#fff1] px-4 py-1 font-semibold text-sm font-secondaire rounded">
                        {turn === Turn.X && "X "}
                        {turn === Turn.O && "O "}
                        Turn
                    </div>
                    <button className="bg-white py-1 rounded text-background-1 flex justify-center items-center w-8">
                        <FaRedoAlt className="text-sm"/>
                    </button>
                </div>
                <div>
                    <Board size={3} />
                </div>
            </div>
        </div>
    );
};

export default Game;
