import React from 'react';
import { useRecoilValue } from 'recoil';
import { css } from 'aphrodite';
import { simpleResultLabelState, themeLabelState } from '../../state/selectors';
import { style } from './style';

export function BoardComponent() {
  const simpleResult = useRecoilValue(simpleResultLabelState);
  const themeLabel = useRecoilValue(themeLabelState);

  return (
    <div className={css(style(themeLabel).Main)}>
      <table className={css(style(themeLabel).Table)}>
        <tr>
          <th className={css(style(themeLabel).Th)}>Count of words</th>
          <th className={css(style(themeLabel).Th)}>Best WPM</th>
          <th className={css(style(themeLabel).Th)}>Best ACC</th>
          <th className={css(style(themeLabel).Th)}>Last WPM</th>
          <th className={css(style(themeLabel).Th)}>Last ACC</th>
        </tr>
        {Object.keys(simpleResult).map((val, key) => (
          <tr key={key}>
            <td style={{ textAlign: 'center' }}>
              {val}
            </td>
            <td style={{ textAlign: 'center' }}>
              {simpleResult[val as unknown as keyof typeof simpleResult].WPM}
            </td>
            <td style={{ textAlign: 'center' }}>
              {simpleResult[val as unknown as keyof typeof simpleResult].ACC}
            </td>
            <td style={{ textAlign: 'center' }}>
              {simpleResult[val as unknown as keyof typeof simpleResult].WPM}
            </td>
            <td style={{ textAlign: 'center' }}>
              {simpleResult[val as unknown as keyof typeof simpleResult].ACC}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
