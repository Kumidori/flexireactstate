import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HeaderBlock = () => (
  <Header as='h3' textAlign='center' block>
  <Icon name='university' className='headerIcon'/>
    <span className='heading'>Kurse</span>
  <Icon name='user circle outline' className='profileIcon'/> 
  </Header>
)

export default HeaderBlock