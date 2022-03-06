import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { css } from 'aphrodite';
// @ts-ignore
import ToggleButton from 'react-toggle-button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { style } from './style';
import { themeState } from '../../state/atoms';
import { themeLabelState } from '../../state/selectors';
import githubBlack from './static/github_black.png';
import githubWhite from './static/github_white.png';

export function NavBarComponent() {
  const [theme, setTheme] = useRecoilState(themeState);
  const themeLabel = useRecoilValue(themeLabelState);
  const handleTheme = () => setTheme(!theme);
  return (
    <div className={css(style(themeLabel).Main)}>
      <div className={css(style(themeLabel).Menu)}>
        <NavLink
          className={({ isActive }) => (isActive
            ? css(style(themeLabel).ButtonLink) : css(style(themeLabel).Link))}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive
            ? css(style(themeLabel).ButtonLink) : css(style(themeLabel).Link))}
          to="/simple"
        >
          Simple
        </NavLink>
      </div>
      <ToggleButton
        inactiveLabel={<BsFillMoonStarsFill color="#ffd700" size={15} />}
        activeLabel={<BsFillSunFill color="white" size={15} />}
        colors={{
          activeThumb: {
            base: '#f0f0f4',
          },
          inactiveThumb: {
            base: '#09d3ac',
          },
          active: {
            base: '#e6802c',
            hover: '#ec4d4d',
          },
          inactive: {
            base: '#282c34',
            hover: '#58379c',
          },
        }}
        value={theme}
        onToggle={handleTheme}
      />
      <a className={css(style(themeLabel).Logo)} href="https://github.com/IlyaAlexandrov1337" target="_blank" rel="noreferrer">
        <img
          style={{ maxWidth: '54px', minWidth: '50px', marginTop: '5px' }}
          src={themeLabel === 'dark' ? githubBlack : githubWhite}
          alt="GitHub"
        />
      </a>
      <FaBars className={css(style(themeLabel).Bars)} />

    </div>
  );
}
