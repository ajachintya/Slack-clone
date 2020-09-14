import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sidebar, MainContainer } from './';

class Slack extends Component {
 state = {}
 render() {
  return(
    <div>
      <Sidebar />
      <MainContainer />
    </div>  
    )
   }
 }


Slack.propTypes = {}
export default Slack