import React, { useState, ChangeEvent } from 'react';
import { SimpleRunningLineComponent } from "../SimpleRuningLine";
import { style } from "./style"
import {css} from "aphrodite";

type DropdownProps = {
    value: string,
    options: {
        label: string,
        value: string,
    }[],
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SimpleChooseComponent() {

    const options = [
        { label: '2', value: '2' },
        { label: '10', value: '10' },
        { label: '30', value: '30' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
    ];

    const [value, setValue] = useState('30');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const Dropdown = ({ value, options, onChange }: DropdownProps) => {
        return (
            <label>
                <select className={css(style('black').Button)} value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        );
    };

    if (isSubmitted) return (
    <div className={css(style('black').Main)}>
        <SimpleRunningLineComponent count={Number(value)}/>
    </div>)
    return (
        <div className={css(style('black').Main)}>
            <span>Выберите количество слов</span>
            <Dropdown
                options={options}
                value={value}
                onChange={handleChange}
            />
            <button className={css(style('').Button)} onClick={handleSubmit}>
                Начать
            </button>
        </div>
    );
}
