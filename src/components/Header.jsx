import React from 'react';
import { Link } from 'react-scroll'
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__opacity"></div>
        <nav className="header__nav">
            <div className="header__menu">
                <Link className="header__link" to="about" smooth={true} duration={500}> About </Link>
                <Link className="header__link" to="about" smooth={true} duration={500}> About </Link>
                <Link className="header__link" to="contact" smooth={true} duration={500}> About </Link>
            </div>
            <button className="header__button"> Contact </button>
        </nav>

        <div className="header__title">
            <h1 className="header__h1">the independent</h1>
        </div>

    </header>
);

export default Header;