import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import {Link,Redirect } from 'react-router-dom';
import history from "../history.js";

let height="0px"

export default class HeaderBlock extends Component {
  state = {
    style: {
      marginBottom: '50px'
    },
};
componentDidMount () {
  height = this.divElement.clientHeight;
  this.setState(prevState => ({
    style: {
        ...prevState.style,
        marginBottom: height
    }
}))
}


componentDidUpdate() {
  height = this.divElement.clientHeight;
  if(height!=this.state.style.marginBottom){
    this.setState(prevState => ({
      style: {
          ...prevState.style,
          marginBottom: height
      }
  }))
  }
}
  
render() { 
  
    return( 
      <div style={this.state.style} id='header'>
      <h3 ref={ (divElement) => this.divElement = divElement} class="ui block dividing center aligned header header-container">
      <Icon name='angle left' className='backIcon' onClick={() => history.goBack()}/>
      <Icon name={this.props.headerIcon} className='headerIcon'/>
        <span className='heading'>{this.props.title}</span>
      </h3>
      </div>
    );
    
  }
  
}



