import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

console.log(darkBaseTheme);

const muiTheme = getMuiTheme(Object.assign({}, darkBaseTheme, {
  palette: {
    accent1Color: '#242423',
    accent2Color: '#242423',
    accent3Color: '#242423',
    primary1Color: '#ad2f32',
    primary2Color: '#ad2f32',
    primary3Color: '#cfdbd5',
    textColor: '#e8eddf'
  }
}));

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={{ height: '100%' }}>
            {this.content}
            {this.devTools}
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}
