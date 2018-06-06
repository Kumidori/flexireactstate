import React from 'react';
import md5 from 'md5';
import { Redirect } from 'react-router';


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
        
        <form onSubmit={this.handleSubmit} >        
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            PW:
            <input type="text" value={this.state.pw} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Login" />
        </form>
        
      );
    }
  }
  export default NewLogin;