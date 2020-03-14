import React, {Component} from 'react';
import FooterMenu from './subComponents/FooterMenu.js';
import data from '../data.js';
import '../css/Footer.css';

export default class Footer extends Component {
    render() {
        const{
            section1,
            section2,
            section3,
        } = data.footerMenu;
        return (
            <section className='footer'>
                <div><a className='footer__logoLink'>
                    <p className='footer__brand'>STORMY<br />KROMER</p>
                    <p className='footer__slogan'>MADE LIKE YOU.</p>
                </a></div>
                <div  className='footer__menu'>
                    <FooterMenu items={section1}/>
                    <FooterMenu items={section2}/>
                    <FooterMenu items={section3}/>
                </div>


            </section>
        )
    }
}