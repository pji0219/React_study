import React, {Component} from 'react';
import ClassType from './components/ClassType';

class Hello extends Component {
  render() {
    return (
      <div>
        <ClassType name="반갑습니다!" color="blue" isSpecial="ture"/>
      </div>
    )
  }
}

export default Hello;