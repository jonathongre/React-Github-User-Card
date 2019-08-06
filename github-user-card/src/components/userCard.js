import React, { Component } from 'react';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='card-container'>
            <a href={this.props.user.html_url}><div className='user-card'>
                <img className='user-image' src={this.props.user.avatar_url} alt={this.props.user.name} />
                <div className='user-info'>
                    <h1>{this.props.user.name}</h1>
                    <h4>User Name: {this.props.user.login}</h4>
                    <h4>Location: {this.props.user.location}</h4>
                    <p>{this.props.user.bio}</p>
                </div>
            </div></a>
            </div>
        )
    }
}