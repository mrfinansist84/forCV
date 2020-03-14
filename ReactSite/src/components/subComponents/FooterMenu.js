import React, {Component} from 'react';
import '../../css/FooterMenu.css';

export default class FooterMenu extends Component {
    render() {
        return (
            <div className='footerMenu'>
                <ul className='footerMenu__list'>
                    {
                        this.props.items.map(item =>
                            <li><a href='#' className='footerMenu__link'>{item}</a></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}