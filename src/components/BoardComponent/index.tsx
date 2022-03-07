import React from 'react';
import { useRecoilValue } from 'recoil';
import { css } from 'aphrodite-to-jss';
import { simpleResultLabelState, themeLabelState } from '../../state/selectors';
import { style } from './style';

export function BoardComponent() {
  const simpleResult = useRecoilValue(simpleResultLabelState);
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
          {Object.keys(simpleResult).map((val) => (

            <tr key={val}>
              <td>
                {val}
              </td>
              <td>
                {simpleResult[val as unknown as keyof typeof simpleResult].WPM || '-'}
              </td>
              <td>
                {simpleResult[val as unknown as keyof typeof simpleResult].ACC || '-'}
              </td>
              <td>
                {simpleResult[val as unknown as keyof typeof simpleResult].WPM || '-'}
              </td>
              <td>
                {simpleResult[val as unknown as keyof typeof simpleResult].ACC || '-'}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
