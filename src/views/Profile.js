import React from 'react';
import md5 from 'md5';
import { Redirect } from 'react-router';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../logo.jpeg'

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value:'',
          pw:'',
          newslink:localStorage.getItem("newslink")==null ? "" : localStorage.getItem("newslink"),
          redirect:''
      };
  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
      this.setState({pw: event.target.value});
    }
    handleChange3(event) {
      this.setState({newslink: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      sessionStorage.setItem('username', this.state.value);
      sessionStorage.setItem('intrapassword', md5(this.state.pw));
      localStorage.setItem('newslink', this.state.newslink);
      this.setState({redirect: true});
      window.open(`https://www.dm.hs-furtwangen.de/dm.php?action=securelogin&handler=user&template_ok=welcome&template_error=login&area=extra2011&user=${this.state.value}&password=${this.state.pw}`);
    }

  
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/courses" />;
          }
      return (
        <div>
        <HeaderBlock title="Profil" headerIcon='user'/>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={logo} /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit} >    
        <Segment stacked>
        <Message className='main'>
        HFU Login benutzen!
        </Message>
        <Form.Input fluid icon='user' iconPosition='left' type="text" name="Name" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
        <Form.Input fluid icon='lock' iconPosition='left' type="password" name="pw" placeholder="Passwort" value={this.state.pw} onChange={this.handleChange2} />
        <Form.Input fluid icon='rss' iconPosition='left' type="text" name="newslink" placeholder="RSS URL" value={this.state.newslink} onChange={this.handleChange3} />
        <Button color='teal' fluid size='large' type="submit" value="Login">Login</Button>
        </Segment> 
        <Message className='main'>
        Den Link zu Ihrem RSS Feed finden sie <a className="rss-link" href="https://felix.hs-furtwangen.de/auth/HomeSite/2178220068/notifications/0/tab/2">hier</a>
        </Message>
        </Form>
        </Grid.Column>
        </Grid>
        <TabNaviBottom activeItem="profile"/>
        </div>
      );
    }
  }
  export default Profile;