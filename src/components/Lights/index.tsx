import { Light } from "./Light";

type LightsProps = {
    isOn: boolean;
}

export function Lights({ isOn }: LightsProps) {
    return (
        <div
            className="flex gap-4"
        >
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
            <Light isOn={isOn} />
        </div>
    );
}