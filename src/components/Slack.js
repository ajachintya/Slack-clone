import React, { Component } from 'react';
import { Sidebar, MainContainer } from './';

class Slack extends Component {
  state = {};
  render() {
    return (
      <div id="slack">
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

Slack.propTypes = {};
export default Slack;
