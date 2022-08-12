import React from "react";

type Props = {
    size: number;
};

const Board = (props: Props) => {
    return (
        <div className="flex flex-col gap-y-4">
            {[...Array(props.size)].map((_e, x) => (
                <div className="flex gap-x-3">
                    {[...Array(props.size)].map((_e, y) => (
                        <div className="w-20 aspect-square rounded-xl bg-[#fff1] cursor-pointer" style={{boxShadow: "3px 6px 5px #0008"}}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
