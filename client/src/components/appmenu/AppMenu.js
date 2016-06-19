import React, { Component } from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import IconSettings from 'material-ui/svg-icons/action/settings'
import IconScan from 'material-ui/svg-icons/action/perm-scan-wifi'

export class AppMenu extends Component {
  render () {
    return (
      <Menu autoWidth={false}>
        <MenuItem primaryText='Newtwork Scanning' leftIcon={<IconScan />} />
        <MenuItem primaryText='Settings' disabled={true} leftIcon={<IconSettings />} />
      </Menu>
    )
  }
}

export default AppMenu
