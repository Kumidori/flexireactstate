import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class TabNaviBottom extends Component {
  state = { activeItem: 'university' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' borderless compact fixed='bottom' size='tiny'>
        <Menu.Item name='rss' active={activeItem === 'rss'} onClick={this.handleItemClick}>
          <Icon name='rss' />
          News
        </Menu.Item>

        <Menu.Item name='university' active={activeItem === 'university'} onClick={this.handleItemClick}>
          <Icon name='university' />
          Kurse
        </Menu.Item>

        <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
          <Icon name='user' />
          Profil
        </Menu.Item>
      </Menu>
    )
  }
}