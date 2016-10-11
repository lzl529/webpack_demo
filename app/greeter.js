import React, {Component} from 'react'
import '../css/test.scss'

class Greeter extends Component{
  render() {
    return (
      <div className="testClass">
        Hi, this is test message.
      </div>
    );
  }
};

export default Greeter;