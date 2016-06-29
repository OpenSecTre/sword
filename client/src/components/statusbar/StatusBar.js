import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export class StatusBar extends Component {
  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Status' />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default StatusBar;
