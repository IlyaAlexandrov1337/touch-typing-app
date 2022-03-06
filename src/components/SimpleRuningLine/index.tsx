import React, { useState } from 'react';
import { css } from 'aphrodite';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useBeforeUnload } from 'react-use';
import { useKeyPress } from '../../hooks/useKeyPress';
import { generate } from '../../utils/words';
import { currentTime } from '../../utils/time';
import { style } from './style';
import { themeLabelState } from '../../state/selectors';
import { simpleResultState } from '../../state/atoms';
import { SimpleChooseComponent } from '../SimpleChooseComponent';

export function SimpleRunningLineComponent({ count } : { count: number }) {
  const themeLabel = useRecoilValue(themeLabelState);
  const [result, setResult] = useRecoilState(simpleResultState);

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

  useBeforeUnload(Boolean(startTime), 'You have unsaved changes, are you sure?');

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
        setResult({
          ...result,
          [count]: {
            WPM: wpm,
            ACC: accuracy,
          },
        });
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

  if (incomingChars.length === 0 && currentChar === '') return <SimpleChooseComponent />;

  return (
    <div className={css(style(themeLabel).Text)}>
      <p>
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
