import React, { Component } from 'react';



export default class ConcertLike  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                _embedded: {
                    events: []
                }
            }
        };

        // fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keywords=' + kuenstlerName + '&apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI')
        // fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YjkzEEih8u0Vzs5OYVB1GbnMNEd4hZyI&keyword' + kuenstlerName)
        fetch('http://localhost:50997/umbraco/api/ticketbylikeapi/GetIsConcertLiked?userId=' + localStorage.getItem('fbUserId') + '&concertId=' + this.props.concertId)
            .then(result => result.json())
            .then(items =>{
                this.selected = false;
                if (items.ResponseData.length > 0)
                {
                    this.selected = true;
                }
                this.setState({},()=>{
                    this.render();
                });
            });
    }

    changeColor(concert, that) {
        
        console.log('clicked')
        fetch('http://localhost:50997/umbraco/api/ticketbylikeapi/saveticketlike',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            mode: "cors", // or without this line
            redirect: 'follow',
            body: JSON.stringify({
                userId: localStorage.getItem('fbUserId'),
                concertId: this.props.concertId
            })
        })
        .then(
            result => result.json()
        )
        .then(items =>{ 
            console.log(items.Message);
            this.selected = !this.selected;
            this.setState({},()=>{
                this.render();
            });
        })
        
    }

    render () {
        return (
            <span className={"glyphicon glyphicon-heart " + (this.selected ? 'red' : 'lightgrey')} onClick={this.changeColor.bind( this)}></span>
        );
    }
}