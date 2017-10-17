import React, { Component } from 'react';
import './NoTickets.css';
import sorry from './sadEmojiTwo.png';

class NoTickets extends Component {
    
    render() {
        return (
            <div className="centeredText">
                <h1>Sorry!<img src={sorry} /></h1>
                <h3>Leider gibt es für diesen Künstler derzeit keine Tickets.</h3>
            </div>
    )}
}

export default NoTickets