import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './userCard';
import FollowerCard from './followerCard';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
            followersData: [''],
        };
    }

    componentDidMount() {
        const userData = axios
      .get("https://api.github.com/users/jonathongre", {})
      .then(response => {
        console.log("User Data: ", response.data);
        this.setState({ userData: response.data });
      })
      .catch(e => {
        console.log("Error :", e);
      });

    const userFollowers = axios
      .get("https://api.github.com/users/jonathongre/followers")
      .then(response => {
        console.log("Followers Data: ", response.data);
        this.setState({ followersData: response.data });
      })
      .catch(error => console.log("Error: ", error));
  }
  render() {
    console.log("State userData: ", this.state.userData);
    return (
        <div className='page'>
        <h1>{this.state.userData.name}'s GitHub</h1>    
        <UserCard user={this.state.userData} />
        <h2>Followers</h2>
        {this.state.followersData.map(follower => (
            <FollowerCard follower={follower} />
        ))}
        </div>
    );
  }
}
