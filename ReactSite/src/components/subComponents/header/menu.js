import React, {Component} from 'react';
import '../../../css/Menu.css';

export default class Menu extends Component {
    render() {
        return (
            <menu className="header__menu">
                <ul className="header__list">
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Caps</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Mens</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Womens</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Kids</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Collections</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Accessories</a></li>
                    <li className="header__list-item">
                        <a className="header__list-item-link" href='#'>Outlet</a></li>
                </ul>
            </menu>
        )
    }

}