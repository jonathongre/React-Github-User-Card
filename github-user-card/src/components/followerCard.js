import React, { Component } from 'react';

export default class FollowerCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='card-container'>
            <a href={this.props.follower.html_url}><div className='follower-card'>
                <img className='user-image' src={this.props.follower.avatar_url} alt={this.props.follower.name} />
                <div className='user-info'>
                    {/* <h1>{this.props.follower.name}</h1> */}
                    <h4>User Name: {this.props.follower.login}</h4>
                    
                </div>
            </div></a>
            </div>
        )
    }
}