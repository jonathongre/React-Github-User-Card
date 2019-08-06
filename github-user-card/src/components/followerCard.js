import React, { Component } from 'react';

export default class FollowerCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='follower-container'>
                <div className='card-container'>
                    <a href={this.props.follower.html_url}>
                        <div className='follower-card'>
                            <img className='user-image' src={this.props.follower.avatar_url} alt={this.props.follower.name} />
                            <div className='user-info'>
                                {/* <h1>{this.props.follower.name}</h1> */}
                                <h4>User Name: {this.props.follower.login}</h4>
                            </div>
                        </div></a>
            
                </div>
            <div className='.github-chart'>
            <img src={`http://ghchart.rshah.org/${this.props.follower.login}`} alt={`${this.props.follower.login}'s Github char`} />
            <p>{this.props.follower.login}'s Github chart</p>
            </div>
            </div>
        )
    }
}