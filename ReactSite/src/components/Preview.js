import React, {Component} from 'react';
import MainBtn from './subComponents/MainBtn.js';

import '../css/Preview.css';

export default class Preview extends Component {
    render() {
        return (
            <section className='preview'>
                <h2 className='preview__header'>WAXED COTTON COLLECTION</h2>
                <h3 className='preview__subheader'>CAPS, VESTS & MORE</h3>
                <MainBtn
                    text={'SHOP NOW'}
                    url={'#'}
                />
            </section>
        )
    }
}