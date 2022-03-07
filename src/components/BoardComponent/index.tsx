import React from 'react';
import { useRecoilValue } from 'recoil';
import { css } from 'aphrodite-to-jss';
import { themeLabelState } from '../../state/selectors';
import { style } from './style';

export function BoardComponent() {
  const themeLabel = useRecoilValue(themeLabelState);

  return (
    <div className={css(style(themeLabel).Main)}>
      <table className={css(style(themeLabel).Table)}>
        <thead>
          <tr>
            <th>Count of words</th>
            <th>Best WPM</th>
            <th>Best ACC</th>
            <th>Last WPM</th>
            <th>Last ACC</th>
          </tr>
        </thead>
        <tbody>
          {[2, 10, 30, 50, 100].map((val) => {
            const best = localStorage.getItem(`${val}-best`)
              ? JSON.parse(localStorage.getItem(`${val}-best`) || '') : null;
            const last = localStorage.getItem(`${val}-last`)
              ? JSON.parse(localStorage.getItem(`${val}-last`) || '') : null;
            return (
              <tr key={val}>
                <td>
                  {val}
                </td>
                <td>
                  {best ? best.WPM : '-'}
                </td>
                <td>
                  {best ? best.ACC : '-'}
                </td>
                <td>
                  {last ? last.WPM : '-'}
                </td>
                <td>
                  {last ? last.ACC : '-'}
                </td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
  );
}
