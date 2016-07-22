import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(Object.assign({}, darkBaseTheme, {
  palette: {
    accent2Color: '#cccccc',
    primary1Color: '#00A6DD',
    primary2Color: '#00A6DD',
    primary3Color: '#00A6DD',
    textColor: '#000000',
    disabledColor: '#cccccc'
  }
}));

export default muiTheme;
