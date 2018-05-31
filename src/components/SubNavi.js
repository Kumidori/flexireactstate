import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class SubNavi extends Component {
  state = {
    activeItem: this.props.activeItem,
};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    
    return (
      <div>
        <Menu pointing secondary className='subNavi'>
        
          <Menu.Item name='dateien' active={activeItem === 'dateien'} onClick={this.handleItemClick} />
        
        
          <Menu.Item name='forum' active={activeItem === 'forum'} onClick={this.handleItemClick} />
        
          <Menu.Item name='info' active={activeItem === 'info'} onClick={this.handleItemClick} />
        
        </Menu>
      </div>
    )
  }
}