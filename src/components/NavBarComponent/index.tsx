import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { style } from './style'
import {css} from "aphrodite";
// @ts-ignore
import ToggleButton from 'react-toggle-button';
import github_black from './static/github_black.png';
import github_white from './static/github_white.png';

export const NavBarComponent = () => {
    const [tog, setTog] = useState(false);
    const handleTog = () => setTog(!tog)

    return (
        <div className={css(style('').Main)}>
            <div className={css(style('').Menu)}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? css(style('').ButtonLink) : css(style('').Link)
                    }
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? css(style('').ButtonLink) : css(style('').Link)
                    }
                    to="/simple"
                >
                    Simple
                </NavLink>
            </div>
            <ToggleButton
                inactiveLabel={<BsFillMoonStarsFill color='#ffd700' size={15}/>}
                activeLabel={<BsFillSunFill color='white' size={15}/>}
                colors={{
                    activeThumb: {
                        base: '#f0f0f4',
                    },
                    inactiveThumb: {
                        base: '#09d3ac',
                    },
                    active: {
                        base: '#2c95e6',
                        hover: '#57a8ec',
                    },
                    inactive: {
                        base: '#282c34',
                        hover: 'rgb(95,96,98)',
                    }
                }}
                value={tog}
                onToggle={handleTog}/>
            <a className={css(style('').Logo)} href="https://github.com/IlyaAlexandrov1337" target='_blank'>
                <img style={{maxWidth: '54px', minWidth: '50px'}}
                     src={github_black} alt='GitHub' />
            </a>
            <FaBars className={css(style('').Bars)}/>

        </div>
    );
};
