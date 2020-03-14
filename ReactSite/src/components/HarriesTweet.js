import React, {Component} from 'react';
import HeaderItem from "./subComponents/HeaderItem.js";
import '../css/HarriesTweet.css';

export default class HarriesTweet extends Component {
    render() {
        return (
            <section className='harriesTweet'>
                <article className='harriesTweet__article'>
                    <HeaderItem
                        text={'HARRIS TWEED'}
                        date={'19'}
                    />
                    <p className='harriesTweet__text'>
                        Across the waters from Scotland lies the barren,
                        rocky island of Harris. 150 years ago, the people of this
                        island created a unique cloth. Today, it is known simply as
                        HARRIS TWEED. This fabric is woven by hand in the homes of
                        Islanders, just like Stormy Kromer caps are sewn by hand by
                        our talented employees. Enjoy this unique collection of products
                        combining history and tradition from both sides of the Atlantic.
                    </p>
                </article>
                <figure><img src='./img/tweed.jpg'/></figure>
            </section>
        )
    }
}