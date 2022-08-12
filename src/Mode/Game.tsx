import React, { useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
import Board from "../Components/Board";

enum Turn {
    X,
    O,
}

const Game = () => {
    const [turn, setTurn] = useState<Turn>(Turn.O);
    const [yourPseudo, setYourPseudo] = useState("");
    const [yourScore, setYourScore] = useState(0);
    const [otherPseudo, setOtherPseudo] = useState("");
    const [otherScore, setOtherScore] = useState(0);
    const [yourTurn, setYourTurn] = useState<Turn>(Turn.O);
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-between w-full">
                    <div className="tracking-widest font-black text-3xl font-secondaire w-8">
                        <span className="text-primary">X</span>
                        <span className="text-secondary">O</span>
                    </div>
                    <div className="text-center flex items-center gap-x-2 text-gray-300 tracking-wide text-xs justify-items-center bg-[#fff1] px-4 py-2 font-bold  rounded">
                        <span className="text-base">
                            {turn === Turn.X && "X "}
                            {turn === Turn.O && "O "}
                        </span>
                        <span>TURN</span>
                    </div>
                    <button className="bg-gray-200 py-2 rounded text-background-1 flex justify-center items-center w-8">
                        <FaRedoAlt className="text" />
                    </button>
                </div>
                <div>
                    <Board size={3} />
                </div>
                <div className="flex text-background-1 gap-x-3">
                    <div className="w-20 text-center bg-primary py-1 rounded shadow font-semibold flex flex-col items-center justify-center">
                        <p className="text-xs">
                            X ({yourTurn === Turn.X ? yourPseudo : otherPseudo})
                        </p>
                        <p>{yourTurn === Turn.X ? yourScore : otherScore}</p>
                    </div>
                    <div className="w-20 text-center rounded shadow font-semibold flex flex-col items-center justify-center bg-gray-200">
                        <p className="text-xs">TIES</p>
                        <p>0</p>
                    </div>
                    <div className="w-20 text-center bg-secondary rounded shadow font-semibold flex flex-col items-center justify-center">
                        <p className="text-xs">
                            O ({yourTurn === Turn.O ? yourPseudo : otherPseudo})
                        </p>
                        <p>{yourTurn === Turn.X ? yourScore : otherScore}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
