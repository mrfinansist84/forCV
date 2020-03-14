import React, {Component} from 'react';
import MainBtn from "./MainBtn.js";
import '../../css/FactoryTour.css';

export default class FactoryTour extends Component {
    render() {
        return (
            <section className='factoryTour'>
                <h2 className='factoryTour__header'>FACTORY TOUR <br/>
                    <span>IRONWOOD, MI</span>
                </h2>
                <MainBtn
                    text={'FACTORY TOUR'}
                    url={'#'}
                />
                <img src='./img/trip.png' className='factoryTour__logo'/>
            </section>
        )
    }
}