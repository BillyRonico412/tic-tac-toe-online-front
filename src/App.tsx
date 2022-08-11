import { useEffect, useState } from "react";
import ChooseFriend from "./Mode/ChooseFriend";
import Game from "./Mode/Game";
import SelectPseudo from "./Mode/SelectPseudo";
import Setters from "./Setters";
import SocketImpl from "./SocketImpl";

export enum ModeEnum {
    SelectPseudo,
    ChooseFriend,
    Game,
}

function App() {
    const [mode, setMode] = useState<ModeEnum>(ModeEnum.Game);

    useEffect(() => {
        Setters.setMode = setMode;
        SocketImpl.init();
    }, []);

    return (
        <div className="h-screen">
            {mode === ModeEnum.SelectPseudo && <SelectPseudo />}
            {mode === ModeEnum.ChooseFriend && <ChooseFriend />}
            {mode === ModeEnum.Game && <Game />}
        </div>
    );
}

export default App;
