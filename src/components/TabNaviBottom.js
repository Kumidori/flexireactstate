import React, {Component} from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link,Redirect } from 'react-router-dom'

export default class TabNaviBottom extends Component {
    state = {
        activeItem: this.props.activeItem,
        redirect: false
    };

    handleItemClick = (e, {name}) => this.setState({
        activeItem: name,
        redirect: true
    });

    render() {
        const {activeItem} = this.state;
        if (this.state.redirect) {
            this.state.redirect=false;
            return <Redirect push to={"/"+activeItem} />;
        }
        return (
            <Menu icon='labeled' borderless compact fixed='bottom' size='tiny' widths='3'>

                    <Menu.Item name='news' active={activeItem === 'news'} onClick={this.handleItemClick}>
                        <Icon name='rss'/>
                        News
                    </Menu.Item>

                    <Menu.Item name='courses' active={activeItem === 'courses'} onClick={this.handleItemClick}>
                        <Icon name='university'/>
                        Kurse
                    </Menu.Item>

                    <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
                        <Icon name='user'/>
                        Profil
                    </Menu.Item>

            </Menu>
        )
    }
}