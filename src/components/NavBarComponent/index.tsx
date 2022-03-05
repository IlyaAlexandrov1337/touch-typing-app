import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { style } from './style'
import {css} from "aphrodite";

export const NavBarComponent = () => {
    return (
        <div className={css(style('').Main)}>
            <div className={css(style('').Menu)}>
                <NavLink
                    className={css(style('').Link)}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={css(style('').Link)}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={css(style('').Link)}
                    to="/contact"
                >
                    Contact
                </NavLink>
                <NavLink
                    className={css(style('').Link)}
                    to="/signin"
                >
                    Sign In
                </NavLink>
                <NavLink className={css(style('').ButtonLink)} to="/sign-up">
                    Sign Up
                </NavLink>
            </div>
            <NavLink className={css(style('').Logo)} to="https://github.com/IlyaAlexandrov1337">
                GitHub
            </NavLink>
            <FaBars className={css(style('').Bars)}/>
        </div>
    );
};
