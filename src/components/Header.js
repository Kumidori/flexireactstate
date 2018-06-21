import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import {Link,Redirect } from 'react-router-dom';
import history from "../history.js";



export default class HeaderBlock extends Component {
  state = {
    marginSmall: {
      marginBottom: '0%'
    },
    marginBig: {
      marginBottom: '18%'
    }
};

  
render() { 
  
    return( 
      this.props.title.length>20 ?
      <div id='header' style={this.state.marginBig}>
      <Header className="header-container" as='h3' textAlign='center' block dividing>
      <Icon name='angle left' className='backIcon' onClick={() => history.goBack()}/>
      <Icon name={this.props.headerIcon} className='headerIcon'/>
        <span className='heading'>{this.props.title}</span>
      </Header>
      </div>
      :
      <div id='header' style={this.state.marginSmall}>
      <Header className="header-container" as='h3' textAlign='center' block dividing>
      <Icon name='angle left' className='backIcon' onClick={() => history.goBack()}/>
      <Icon name={this.props.headerIcon} className='headerIcon'/>
        <span className='heading'>{this.props.title}</span>
      </Header>
      </div>
    );
    
  }
  
}



