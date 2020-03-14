import React, {Component} from 'react';
import MainBtn from './subComponents/MainBtn.js';
import HeaderItem from './subComponents/HeaderItem.js';
import CapItem from './subComponents/CapItem.js';
import data from '../data.js';
import '../css/BestSeller.css';

export default class BestSeller extends Component {
    render() {
        return (
            <section className='bestSeller'>
               <HeaderItem
               text={data.sectionTitle}
               date={data.year}
               />
               <div className='bestSeller__capItem'>
                   { data.caps.map(cap =>
                       <CapItem
                       key={cap.id}
                       url={cap.url}
                       colors={cap.color}
                       price={cap.price}
                       title={cap.title}
                       label={cap.label}
                       />
                   )
                   }
               </div>
                <MainBtn
                    text={'SHOP COLLECTION'}
                    url={'#'}
                />
            </section>
        )
    }
}