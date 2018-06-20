import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link,Redirect } from 'react-router-dom'

export default class SubNavi extends Component {
  state = {
    intranet: false,
    activeItem: this.props.activeItem,
    redirect: false
};
componentWillMount() {
  this.setState({
    intranet: this.props.intranet
  });
}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name, redirect: true })
  
  render() {
    const { activeItem } = this.state
    const firstItem = {
      paddingLeft: '8%'
    };
    if (this.state.redirect) {
      this.state.redirect=false;
      if(this.state.intranet){
        return <Redirect push to={
          "/intracourses/"+this.props.courseKey+"/"+activeItem
        } />;
      }
      return <Redirect push to={
        "/courses/"+this.props.courseKey+"/"+activeItem
      } />;
  }
    return (
      <div>
        <Menu pointing secondary className='subNavi' widths='3'>
        
          <Menu.Item name='dateien' active={activeItem === 'dateien'} onClick={this.handleItemClick} style={firstItem}/>
        
        
          <Menu.Item name='forum' active={activeItem === 'forum'} onClick={this.handleItemClick} style={firstItem}/>
        
          <Menu.Item name='info' active={activeItem === 'info'} onClick={this.handleItemClick} />
        
        </Menu>
      </div>
    )
  }
}