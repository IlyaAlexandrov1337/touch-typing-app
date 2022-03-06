import { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
type Callback = (arg0: string) => void

export const useKeyPress = (callback: Callback) => {
  const [keyPressed, setKeyPressed] = useState<string>();

  useEffect(() => {
    const downHandler = ({ key } : KeyboardEvent) => {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback(key);
      }
    };

    const upHandler = () => {
      setKeyPressed(undefined);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};
