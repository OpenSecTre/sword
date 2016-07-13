import React, { Component } from 'react';
// import classes from './_style.scss';
import AppBar from 'material-ui/AppBar';

export class TitleBar extends Component {
  render () {
    return (
      <AppBar
        title='SWoRD'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
      />
    );
  }
}

export default TitleBar;
