import React, { Component } from 'react';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='user-card'>
                <img className='user-image' src={this.props.user.avatar_url} alt={this.props.user.name} />
                <div className='user-info'>
                    <h2>{this.props.user.name}</h2>
                    <h3>User Name: {this.props.user.login}</h3>
                    <h4>Location: {this.props.user.location}</h4>
                    <p>{this.props.user.bio}</p>
                </div>
            </div>
        )
    }
}