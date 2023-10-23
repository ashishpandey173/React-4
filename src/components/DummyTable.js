import React, { Component } from 'react';
// import React, { useState, useEffect , Component} from 'react';
import axios from 'axios';
import "./styles.css"

class DummyTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get('https://dummyjson.com/users')
    .then((response) => {
      console.log(response.data); // Log the response to check its structure
      this.setState({ users: response.data });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  
  }
  

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Dummy Table</h1>
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.avatar}
                      alt={`${user.firstName} ${user.lastName}'s profile`}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.university}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DummyTable;
