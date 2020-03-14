import React, {Component} from 'react';
import '../../css/ProdVideo.css';

export default class ProdVideo extends Component {
    render() {
        return (
            <section className='prodVideo'>
                <h2 className='prodVideo__headerTop'>HANDCRAFTED <br/>
                    <span>IN THE U.S.A</span>
                </h2>
                <a href='#' className='prodVideo__link'>Watch
                    <img src='./img/play.png' className='prodVideo__link-img'/>
                Video</a>
                <h2 className='prodVideo__headerBottom'>LEGENDARY <br/>
                    <span>SINCE 1903</span>
                </h2>
            </section>
        )
    }
}