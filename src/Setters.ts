import React from "react";
import { ModeEnum } from "./App";
import { ModeInviteEnum } from "./Mode/ChooseFriend";

export default class Setters {
    static setMode?: React.Dispatch<React.SetStateAction<ModeEnum>>;
    static setPseudos?: React.Dispatch<React.SetStateAction<string[]>>;
    static setModeInvite?: React.Dispatch<React.SetStateAction<ModeInviteEnum>>;
    static setOtherPseudo?: React.Dispatch<React.SetStateAction<string>>;
}
