import React, {Component} from 'react';
import '../../css/History.css';

export default class History extends Component {
    render() {
        return (
            <section className='history'>
                <span className='history__subheader'>THE ADVENTURE CONTINUES WITH STORMY KROMER</span>
                <h2 className='history__header'>LEGENDARY STYLE</h2>
                <p className='history__text'>
                    When you’ve been around as long as we have, you’re bound to see new trends,
                    new technology, new everything. Yet here we are, pretty much the same as we were
                    a hundred years ago. We’re all for innovation, sure, but we also know what works for us.
                    We believe in what we do and still wake up every morning excited to do it.
                    So let the wheels of progress clamor onward in pursuit of perfection.
                    We found it a century ago. And when you get it right the first time,
                    everything else is details. Lucky for us, passion and pride never go out of style.
                </p>
                <div className='history__links'>
                    <a href='#' className='history__linkItem'>SHOP MENS</a>
                    <a href='#' className='history__linkItem'>SHOP WOMENS</a>
                    <a href='#' className='history__linkItem'>SHOP KIDS</a>
                </div>
            </section>
        )
    }
}