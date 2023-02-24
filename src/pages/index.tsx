import { useState } from "react";
import { Lights } from "../components/Lights";

export default function Index() {
    const [ lightsIsOn, setLightsIsOn ] = useState<boolean>(false);

    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen"
        >
            <button
                type="button"
                aria-label="Botão que liga e desliga as luzes"
                className="p-4 mb-4 bg-slate-300"
                onClick={() => setLightsIsOn(!lightsIsOn)}
            >
                {lightsIsOn ? "Desligar luzes" : "Ligar luzes"}
            </button>
            <Lights isOn={lightsIsOn} />
        </div>
    );
}