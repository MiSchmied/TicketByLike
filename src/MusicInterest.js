import React, { Component } from 'react';
import MusicDetail from './MusicDetail.js';
import ConcertDetail from './ConcertDetail.js';
import {withRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FacebookData from './FacebookData.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './MusicInterest.css';


class MusicInterest extends Component {
 

    render() {
        return (
        <div className="bgColor">
            <Grid>
                <Row className="marginTop">
                    {this.props.data.map((music) =>
                        <Col md={3}>
                            <div className="test">
                                {music.name}
                                <MusicDetail fbId={music.id} fbName={music.name} authtoken={this.props.authtoken} />
                            </div>
                        </Col>
                    )}
                </Row>
            </Grid>
        </div>
            )
    }
}

export default withRouter(MusicInterest)