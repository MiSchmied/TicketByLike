import React, { Component } from 'react';
import {withRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './MusicInterest.css';

class ConcertDetail extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            data: {
                _embedded: {
                    events:[]
                }
            }};
            let kuenstlerName = this.props.match.params.name;
            // fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keywords=' + kuenstlerName + '&apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI')
            // fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI&keyword' + kuenstlerName)
            fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI&keyword=' +kuenstlerName + '&classificationName=music')
            .then(result=>result.json())
            .then(items=>this.setState({data: items}), function(){
                this.render();
                
            });
    }

    render() {
        return (
            <div className="bgColor">
                Konzertdaten für {this.props.match.params.name}<br/>
                {this.state.data._embedded !== undefined ? this.state.data._embedded.events.map((concert) =>
                
                <p>{concert.name} - {concert.dates.start.localDate}<br/>
                <img src={concert.images[0].url} />
                </p>

                ) : <p>Keine Konzertdaten gefunden</p>}
                <button onClick={() => {this.props.history.push('/overview')}}>Zur Übersicht</button>
                </div>


        )
    }
}

export default withRouter(ConcertDetail)