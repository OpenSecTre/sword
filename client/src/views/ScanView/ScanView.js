import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as scanActions from 'redux/actions/scan';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const primaryButton = true;

export class ScanView extends Component {
  static propTypes = {
    ip: PropTypes.string.isRequired,
    port: PropTypes.string.isRequired,
    result: PropTypes.array.isRequired,
    scanning: PropTypes.bool.isRequired,
    changeIpAction: PropTypes.func.isRequired,
    changePortAction: PropTypes.func.isRequired
  }

  get result () {
    if (this.props.scanning) {
      return 'scanning...';
    }
    else {
      return this.props.result;
    }
  }

  render () {
    return (
      <div>
        <div>
          <TextField
            hintText='192.168.1.0/24'
            floatingLabelText='IP-address'
            value={this.props.ip}
            onChange={(e) => {this.props.changeIpAction(e.target.value)}}
          />
          <TextField
            hintText='1024-65535'
            floatingLabelText='Port (range)'
            value={this.props.port}
            onChange={(e) => {this.props.changePortAction(e.target.value)}}
          />
        </div>
        <div>
          <RaisedButton
            label='Scan'
            primary={primaryButton}
            onClick={this.props.scanAction} />
        </div>
        <div>
          <h2>Result:</h2>
          <div>
            {this.result.map((line, index) => {
              return (
                <div key={index}>{line}</div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapActionCreators = scanActions;

const mapStateToProps = (state) => ({
  ip: state.scan.ip,
  port: state.scan.port,
  result: state.scan.result,
  scanning: state.scan.scanning
});

export default connect(mapStateToProps, mapActionCreators)(ScanView);
