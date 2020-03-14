import React, {Component} from 'react';
import '../../../css/IconMenu.css';

export default class IconMenu extends Component {
    render() {
        return (
            <div className="header__iconMenu">
                <ul className="header__iconMenu-list">
                    <li><a href='#' className="header__iconMenu-item header__iconMenu-item--present"></a></li>
                    <li><a href='#' className="header__iconMenu-item header__iconMenu-item-search"></a></li>
                    <li><a href='#' className="header__iconMenu-item header__iconMenu-item--shop"></a></li>
                </ul>
            </div>
        )
    }

}