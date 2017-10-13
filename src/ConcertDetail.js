import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoTickets from './NoTickets.js';
import { Button } from 'react-bootstrap';
import GoogleMap from './GoogleMap.js';
import './ConcertDetail.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class ConcertDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                _embedded: {
                    events: []
                }
            }
        };

        let kuenstlerName = this.props.match.params.name;
        // fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keywords=' + kuenstlerName + '&apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI')
        // fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI&keyword' + kuenstlerName)
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI&keyword=' + kuenstlerName + '&classificationName=music')
            .then(result => result.json())
            .then(items => this.setState({ data: items }), function () {
                this.render();

            });
    }
    render() {
        return (
            <div>
                <br />
                <button onClick={() => { this.props.history.push('/overview') }}>Zur Übersicht</button>
                <h3>Konzertdaten für {this.props.match.params.name}</h3>

                {this.state.data._embedded !== undefined ? this.state.data._embedded.events.map((concert, i) =>
                    <Row key={i}>
                        <Col lg={6}>
                            <h4>{concert.name} | {concert.dates.start.localDate}</h4><br />
                            {concert.priceRanges ? concert.priceRanges.map((price, j) =>
                                <span key={j}>Preisspanne: {price.min}{price.currency} - {price.max}{price.currency}</span>) : ''
                            } <br />
                            <a href={concert.url}>
                                <img className="concertImages" src={concert.images[0].url} /><br />
                                <Button bsStyle="primary">Link zum Konzert</Button>
                            </a>
                        </Col>
                        {concert._embedded.venues.map((loc, k) =>
                            <Col className="karteAbstandOben" lg={6} key={k} >
                                {loc.location.longitude !== '0' && loc.location.latitude !== '0' ?
                                    <GoogleMap lng={loc.location.longitude} lat={loc.location.latitude} />
                                    : ''}
                            </Col>
                        )}

                    </Row>
                ) : <NoTickets></NoTickets>}
            </div>
        )
    }
}
export default withRouter(ConcertDetail)