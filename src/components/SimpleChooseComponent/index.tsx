import React, { useState, ChangeEvent } from 'react';
import { css } from 'aphrodite-to-jss';
import { useRecoilValue } from 'recoil';
import { SimpleRunningLineComponent } from '../SimpleRuningLine';
import { style } from './style';
import { themeLabelState } from '../../state/selectors';

type DropdownProps = {
    value: string,
    options: {
        label: string,
        value: string,
    }[],
    // eslint-disable-next-line no-unused-vars
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

function Dropdown({ value, options, onChange }: DropdownProps) {
  const themeLabel = useRecoilValue(themeLabelState);
  return (
    <select className={css(style(themeLabel).Button)} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export function SimpleChooseComponent({ isTried } : { isTried: boolean }) {
  const themeLabel = useRecoilValue(themeLabelState);
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

  if (isSubmitted) {
    return (
      <div className={css(style(themeLabel).Row)}>
        <SimpleRunningLineComponent count={Number(value)} />
      </div>
    );
  }
  return (
    <div className={css(style(themeLabel).Main)}>
      {isTried ? <h3>Хотите поробовать ещё раз?</h3> : (
        <h3>
          Помните: результат сохранится,
          только если вы пропечатаете все слова до последнего символа!
        </h3>
      ) }
      <div className={css(style(themeLabel).Row)}>
        <span>Выберите количество слов</span>
        <Dropdown
          options={options}
          value={value}
          onChange={handleChange}
        />
        <button type="button" className={css(style(themeLabel).Button)} onClick={handleSubmit}>
          Начать
        </button>
      </div>
    </div>
  );
}
