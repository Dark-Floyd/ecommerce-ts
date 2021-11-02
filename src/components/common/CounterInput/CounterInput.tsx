import React from "react";
import styles from "./CounterInput.module.css";




interface Props {
    onChange: (value: number) => void;
    inputValue: number;
}
const CounterInput: React.FC<Props> = (props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = parseInt(event.target.value);

        if (numberValue) {
            props.onChange(numberValue);
        }
    };

    return (
        <React.Fragment>
            <input
                type="number"
                step="1"
                min="1"
                max="1000"
                value={props.inputValue}
                onChange={handleInputChange}
            />
        </React.Fragment>
    );
};

export default CounterInput;
