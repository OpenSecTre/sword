import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { scanAction, changeIpAction, changePortAction } from 'redux/modules/scanner';
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
    changePortAction: PropTypes.func.isRequired,
    scanAction: PropTypes.func.isRequired
  }

  constructor () {
    super();
    this.changeIp = this.changeIp.bind(this);
    this.changePort = this.changePort.bind(this);
  }

  get result () {
    if (this.props.scanning) {
      return 'scanning...';
    } else {
      return this.props.result;
    }
  }

  changeIp (event) {
    this.props.changeIpAction(event.target.value);
  }

  changePort (event) {
    this.props.changePortAction(event.target.value);
  }

  render () {
    return (
      <div>
        <div>
          <TextField
            hintText='192.168.1.0/24'
            floatingLabelText='IP-address'
            value={this.props.ip}
            onChange={this.changeIp}
          />
          <TextField
            hintText='1024-65535'
            floatingLabelText='Port (range)'
            value={this.props.port}
            onChange={this.changePort}
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

const mapActionCreators = {
  scanAction,
  changeIpAction,
  changePortAction
};

const mapStateToProps = (state) => ({
  ip: state.scan.ip,
  port: state.scan.port,
  result: state.scan.result,
  scanning: state.scan.scanning
});

export default connect(mapStateToProps, mapActionCreators)(ScanView);
