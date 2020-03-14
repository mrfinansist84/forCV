import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import Preview from './components/Preview.js';
import BestSeller from './components/BestSeller.js';
import Pets from './components/Pets.js';
import AboutUs from './components/AboutUs.js';
import HarriesTweet from './components/HarriesTweet.js';
import Footer from './components/Footer.js';
import ContactUs from './components/ContactUs.js';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Preview/>
                <BestSeller/>
                <Pets/>
                <AboutUs/>
               <HarriesTweet />
                <Footer />
                <ContactUs/>
            </div>
        );
    }
}

