import classNames from "classnames";

type LightProps = {
    isOn: boolean;
}

export function Light(props: LightProps) {
    return (
        <div
            className={classNames("h-20 w-20", {
                "bg-black": !props.isOn,
                "bg-primary-500": props.isOn
            })}
        />
    );
}