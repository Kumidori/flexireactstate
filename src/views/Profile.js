import React from 'react';
import md5 from 'md5';
import { Redirect } from 'react-router';
import {Header} from 'semantic-ui-react';
import HeaderBlock from '../components/Header';
import {Message} from 'semantic-ui-react';
import TabNaviBottom from '../components/TabNaviBottom';

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
      //window.open(`https://www.dm.hs-furtwangen.de/dm.php?action=securelogin&handler=user&template_ok=welcome&template_error=login&area=extra2011&user=${this.state.value}&password=${this.state.pw}`);
    }

  
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/news" />;
          }
      return (
        <div>
        <HeaderBlock title="Profil" headerIcon='user'/>
        <form class="ui form" onSubmit={this.handleSubmit} >    
        <Message className='main'>
        HFU Login benutzen!
        </Message>    
          <div class="field">
          <label>Name</label>
            <input type="text" name="Name" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div class="field">
          <label>Passwort</label>
            <input type="password" name="pw" placeholder="Passwort" value={this.state.pw} onChange={this.handleChange2} />
          </div>
          <div class="field">
          <label>Felix RSS FEED URL</label>
            <input type="text" name="newslink" placeholder="RSS URL" value={this.state.newslink} onChange={this.handleChange3} />
          </div>
          <button class="ui button" type="submit" value="Login">Login</button>
          <Message className='main'>
        Den Link zu Ihrem RSS Feed finden sie <a className="rss-link" href="https://felix.hs-furtwangen.de/auth/HomeSite/2178220068/notifications/0/tab/2">hier</a>
        </Message> 
        </form>
        <TabNaviBottom activeItem="profile"/>
        </div>
      );
    }
  }
  export default Profile;