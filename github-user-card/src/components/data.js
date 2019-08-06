import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './userCard';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
            followersData: ''
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
        <>
        <UserCard user={this.state.userData} />
        </>
    );
  }
}
