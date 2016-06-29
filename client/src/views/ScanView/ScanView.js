import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const primaryButton = true;

export class ScanView extends Component {
  render () {
    return (
      <div>
        <div>
          <TextField
            hintText='192.168.1.0/24'
            floatingLabelText='IP-address'
          />
        </div>
        <div>
          <RaisedButton label='Scan' primary={primaryButton} />
        </div>
        <div>
          <h2>Result:</h2>
        </div>
      </div>
    );
  }
}

export default ScanView;
