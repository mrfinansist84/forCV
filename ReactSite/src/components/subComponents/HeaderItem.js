import React, {Component} from 'react';
import '../../css/HeaderItem.css';

export default class HeaderItem extends Component {
    render() {
        return (
            <section className='headerItem'>
                <div className='headerItem__text'>{this.props.text}</div>
                <div className='headerItem__date'>20 {this.props.date}</div>
            </section>
        )
    }
}