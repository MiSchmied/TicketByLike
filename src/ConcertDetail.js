import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoTickets from './NoTickets.js';
import { Button, Glyphicon } from 'react-bootstrap';
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
changeColor(concert, that) {
    concert.setState({},()=>{
        concert.render();
    });
    console.log('clicked')

    this.selected = !this.selected;
}
    
    render() {

        

        return (
            <div className="fullBody">
                <br />
                <Button bsStyle="primary" onClick={() => { this.props.history.push('/overview') }}>Zur Übersicht</Button>
                <h2>Konzertdaten für <strong className="biggerName">{this.props.match.params.name}</strong></h2>
                <Grid>
                    {this.state.data._embedded !== undefined ? this.state.data._embedded.events.map((concert, i) =>
                       
                        <Row key={i}>
                            <Col lg={6}>
                                {/* {concert.sales !== undefined && concert.sales.presales ? concert.sales.presales.map((preSale, f) =>
                        <h3 key={f}><a href={preSale.url}>{preSale.name}</a></h3>
                         ) : '' } */}
                                <h4>{concert.name}</h4>
                                <h4>{concert.dates.start.localDate}</h4>
                                {concert._embedded.venues.map((cities, m) =>
                                <h4>{cities.name}, {cities.city.name}</h4>
                                )}
                                {concert.priceRanges ? concert.priceRanges.map((price, j) =>
                                    <span key={j}>Preisspanne: {price.min}{price.currency} - {price.max}{price.currency}</span>) 
                                    : <span>Keine Angabe</span>
                                } <br />
                                <div className="wrapper">
                                    <a href={concert.url} target="_blank">
                                    <img className="concertImages" src={concert.images[0].url} /></a>
                                    <span className={"glyphicon glyphicon-heart " + (concert.selected ? 'red' : 'lightgrey')} onClick={this.changeColor.bind(concert, this)}></span>
                                    </div>
                                    <br />
                                    <a href={concert.url}><Button bsStyle="primary">Link zum Konzert</Button></a>
                            <hr />
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
                    
                </Grid>
                
            </div>
        )
    }
}
export default withRouter(ConcertDetail)