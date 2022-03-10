import React, { useState, useEffect, useRef } from 'react';
import { css } from 'aphrodite-to-jss';
import { useRecoilValue } from 'recoil';
import { useKeyPress } from '../../hooks/useKeyPress';
import { generate } from '../../utils/words';
import { currentTime } from '../../utils/time';
import { style } from './style';
import { themeLabelState } from '../../state/selectors';
import { SimpleChooseComponent } from '../SimpleChooseComponent';

export function SimpleRunningLineComponent({ count } : { count: number }) {
  const themeLabel = useRecoilValue(themeLabelState);

  const initialWords = generate(count);
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substring(1));

  const [startTime, setStartTime] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState('');

  const [accuracy, setAccuracy] = useState('');
  const [typedChars, setTypedChars] = useState('');

  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, [searchInput]);

  useKeyPress((key) => {
    if (!startTime) {
      setStartTime(currentTime());
    }

    let updatedOutgoingChars = outgoingChars;
    if (key === currentChar) {
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      setCurrentChar(incomingChars.charAt(0));

      if (incomingChars.length === 0) {
        localStorage.setItem(`${count}-last`, JSON.stringify({
          WPM: wpm,
          ACC: accuracy,
        }));
        if (localStorage.getItem(`${count}-best`)) {
          const best = JSON.parse(localStorage.getItem(`${count}-best`) || '');
          const last = JSON.parse(localStorage.getItem(`${count}-last`) || '');
          if (best.WPM > last.WPM) best.WPM = last.WPM;
          if (best.ACC > last.ACC) best.ACC = last.ACC;
        } else localStorage.setItem(`${count}-best`, localStorage.getItem(`${count}-last`) || '');
      }

      setIncomingChars(incomingChars.substring(1));

      if (incomingChars.charAt(0) === ' ') {
        setWordCount(wordCount + 1);
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
      }
    }

    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
        2,
      ),
    );
  });

  if (incomingChars.length === 0 && currentChar === '') return <SimpleChooseComponent isTried />;

  return (
    <div className={css(style(themeLabel).Text)}>
      <p>
        <input ref={searchInput} style={{ visibility: 'hidden' }} />
        <span className={css(style(themeLabel).CharacterOut)}>
          {(leftPadding + outgoingChars).slice(-20)}
        </span>
        <span className={css(style(themeLabel).CharacterCurrent)}>{currentChar}</span>
        <span>{incomingChars.substring(0, 20)}</span>
      </p>
      <h3>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        WPM: {wpm} | ACC: {accuracy}%
      </h3>
    </div>
  );
}
