import React, {Component} from 'react';
import '../../css/CapItem.css';

export default class CapItem extends Component {
    render() {
        const label = this.props.label?
            <div className='capItem__label'>{this.props.label}</div>:
            false;
        return (
            <section className='capItem'>
                <img src={this.props.url} className='capItem__img'/>
                <ul className='capItem__colors'>
                    {this.props.colors.map(color =>
                        <li className='capItem__color-item'>
                            <span className={color}>
                                 </span></li>
                    )}
                </ul>
                <span className='capItem__title'>{this.props.title}</span>
                <span className='capItem__price'>${this.props.price}</span>
                {label}
            </section>
        )
    }
}