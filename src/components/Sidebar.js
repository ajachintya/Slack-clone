import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Sidebar
**/

class Sidebar extends Component {
 state = {}
 render() {
  return (
    <div id="side-bar">
      <div className="user-profile">
        <div>
          <img />
        </div>
        <div>
          Ronald
        </div>
      </div>
      <div className="user-channels"></div>
      
    </div>
  );
   }
 }


Sidebar.propTypes = {}
export default Sidebar