import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password : '',
    clicked : false,
    validated : false
  }

  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password : e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked : true,
      validated : this.state.password === '0000'
    });
    this.input.focus();
  }

  render() {
    return (
      <div>
      write : 0000
      <br/>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          ref={ref => {
            console.log("ref", ref)
            this.input=ref}
          }
        />
        <button onClick={this.handleButtonClick}>validate</button>
      </div>
    )
  }
}

export default ValidationSample;
