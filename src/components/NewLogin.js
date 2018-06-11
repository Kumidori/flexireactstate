import React from 'react';
import md5 from 'md5';
import { Redirect } from 'react-router';
import {Header} from 'semantic-ui-react';


class NewLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value:'',
          pw:'',
          redirect:''
          
      };
  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
        this.setState({pw: event.target.value});
        
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value + 'A pw was submitted: '+ this.state.pw );
      event.preventDefault();
      
      sessionStorage.setItem('username', this.state.value);
      sessionStorage.setItem('pw', md5(this.state.pw));
      this.setState({value:'',pw:''});
      this.setState({redirect: true});
      
    
    }

  
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/news" />;
          }
      return (
        <div>
        <Header className="header-container" as='h3' textAlign='center' block>
          <span className='heading'>FlexiLearn</span>
        </Header>
        <form class="ui form" onSubmit={this.handleSubmit} >        
          <div class="field">
          <label>Name</label>
            <input type="text" name="Name" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div class="field">
          <label>Passwort</label>
            <input type="password" name="pw" placeholder="Passwort" value={this.state.pw} onChange={this.handleChange2} />
          </div>
          <button class="ui button" type="submit" value="Login">Login</button>
        </form>
        </div>
      );
    }
  }
  export default NewLogin;