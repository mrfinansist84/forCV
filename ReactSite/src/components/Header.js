import React, {Component} from 'react';
import IconMenu from './subComponents/header/iconMenu.js';
import Menu from './subComponents/header/menu.js';
import '../css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <a href='#' className='header__logo'></a>
                <Menu />
                <IconMenu />
            </header>
        )
    }
}