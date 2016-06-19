import React, { Component } from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import classes from './_style.scss';

import IconSettings from 'material-ui/svg-icons/action/settings'
import IconScan from 'material-ui/svg-icons/action/perm-scan-wifi'

export class AppMenu extends Component {
  render () {
    return (
      <div className={classes.menu}>
        <Menu autoWidth={false}>
          <MenuItem primaryText='Newtwork Scanning' leftIcon={<IconScan />} />
          <MenuItem primaryText='Settings' disabled={true} leftIcon={<IconSettings />} />
        </Menu>
      </div>
    )
  }
}

export default AppMenu
