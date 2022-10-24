import React from 'react';
import { ReactDOM } from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero';
import Card from './Components/Card';
import katiePhoto from './assets/katie-zaferes.png'
import cardsData from './cardsData.js'

export default function App() {
    const cardsEl = cardsData.map(card => {
        return <Card 
        key={card.id}
        {...card}
        />
    })
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>

            <div class="cards-list">{cardsEl}</div>
        </div>
    )
}