import React, {Component} from 'react';
import MainBtn from './subComponents/MainBtn.js';
import '../css/Pets.css';


export default class Pets extends Component {
    render() {
        return (
            <section className='pets'>
                <div className='pets__info'>
                    <span className='pets__subTitle'>COOL GEAR FOR ALL CREATURES GREAT AND SMALL</span>
                    <h2 className='pets__title'>STORMY KROMER FOR PETS</h2>
                    <p className='pets__text'>For over a century we've kept humans
                        well-fitted with the world’s finest caps and clothing.
                        But we know your families include furry members, too.
                        Welcome to a line of pet gear built with the same made-in-the-USA
                        quality, reimagined exclusively for your pets.
                    </p>
                </div>
                <img src='../img/pets.jpg' className='pets__img'/>
                <MainBtn
                    text={'SHOP COLLECTION'}
                    url={'#'}
                />
            </section>
        );
    }
}
