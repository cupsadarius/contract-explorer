import React, { Component } from 'react';
import Nav from '../../../Nav/components/Nav';

export default class Explore extends Component {

  render() {
    return [
      <Nav key="nav" />,
      <div className="container"  key="explore">
        Explore
      </div>
    ];
  }
}

