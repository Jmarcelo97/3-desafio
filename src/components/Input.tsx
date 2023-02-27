import classNames from "classnames";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    value?: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({label, id, placeholder, error, ...rest}, ref) => {
    return (
        <div className={classNames("flex flex-col", {
            "pointer-events-none opacity-50": rest.disabled
        })}>
            {label && (
                <label
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                className="p-2 bg-gray-200 w-full rounded-sm"
                id={id}
                placeholder={placeholder || label}
                ref={ref}
                {...rest}
            />
            {error && (
                <small className="mt-1 text-sm text-red-500">{error}</small>
            )}
        </div>
    );
};

export const Input = forwardRef(InputBase);