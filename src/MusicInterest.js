import React, { Component } from 'react';
import MusicDetail from './MusicDetail.js';
import {withRouter} from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './MusicInterest.css';


class MusicInterest extends Component {
 

    render() {
        return (
        <div className="bgColor">
            <br/>
            <Grid>
                <Row className="marginTop">
                    {this.props.data.map((music) =>
                        <Col lg={2} md={3} sm={6} xs={12}>
                            <div className="artist">
                                <MusicDetail fbId={music.id} fbName={music.name} authtoken={this.props.authtoken} />
                                {music.name}
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