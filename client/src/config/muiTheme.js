import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(Object.assign({}, darkBaseTheme, {
  palette: {
    accent1Color: '#242423',
    accent2Color: '#242423',
    accent3Color: '#242423',
    primary1Color: '#ad2f32',
    primary2Color: '#ad2f32',
    primary3Color: '#cfdbd5',
    textColor: '#e8eddf',
    disabledColor: '#666666'
  }
}));

export default muiTheme;
