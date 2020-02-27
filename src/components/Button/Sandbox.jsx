import React, {Component} from 'react';
import Button from "./Button";

class Sandbox extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={()=>console.log('btn1')}
          active
        >
          btn1
        </Button>
        <Button
          onClick={()=>console.log('btn2')}
          disabled
        >
          btn2
        </Button>
        <Button
          href='test'
          disabled
        >
          btn3
        </Button>
      </div>
    );
  }
}

export default Sandbox;