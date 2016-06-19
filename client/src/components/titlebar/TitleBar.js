import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import classes from './_style.scss';

export class TitleBar extends Component {
  render () {
    return (
      <div className={classes.appbar}>
        <h1 className={classes.title}>
          SW<span className={classes.highlight}>o</span>RD
        </h1>
      </div>
    )
  }
}

export default TitleBar
