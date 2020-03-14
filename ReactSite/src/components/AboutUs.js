import React, {Component} from 'react';
import ProdVideo from './subComponents/ProdVideo.js';
import History from './subComponents/History.js';
import FactoryTour from './subComponents/FactoryTour.js';
import '../css/AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <section className='aboutUs'>
                <h2 className='aboutUs__header'>MADE LIKE YOU</h2>
                <div className='aboutUs__mainBlock'>
                    <ProdVideo />
                    <History />
                    <FactoryTour />
                </div>
            </section>
        )
    }
}