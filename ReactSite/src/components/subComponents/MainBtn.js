import React, {Component} from 'react';
import '../../css/MainBtn.css';

export default class MainBtn extends Component {
    render() {
        return (
            <a href={this.props.url} className='mainBtn__link'>
                {this.props.text}
            </a>
        )
    }
}