import React, { Component } from 'react';
import Nav from '../../../Nav/components/Nav';

export default class Reader extends Component {
  constructor(props) {
    super(props);

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAbiChange = this.handleAbiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      error: false
    };
  }

  handleAddressChange() {
    this.props.setField('address', this.address.value);
    if (!this.props.web3.utils.isAddress(this.address.value)) {
      this.props.setError('address', 'Invalid ethereum address.');
    } else {
      this.props.setError('address', '');
    }
    
  }
  
  handleAbiChange() {
    this.props.setField('abi', this.abi.value);
    try {
      const formated = JSON.stringify(JSON.parse(this.abi.value), undefined, 2);
      this.props.setField('abi', formated);
      this.props.setError('abi', '');
    } catch (error) {
      this.props.setError('abi', 'Invalid Contract ABI.');
    }
  }

  handleSubmit() {
    if (this.props.contractError.abi || this.props.contractError.address || !this.props.contract.address || !this.props.contract.address) {
      this.setState(() => ({error: true}));
    } else {
      this.setState(() => ({error: false}));
      this.props.history.push('/explore');
    }
  }

  render() {
    return [
      <Nav key="nav" />,
      <div className="container"  key="form">
      {
        this.state.error && <div className="alert alert-danger" role="alert">
          Please input a valid contract address and abi.
        </div>
      }
        <form>
          <div className="form-group">
            <label htmlFor="address">Contract Address</label>
            <input
              type="text"
              className={`form-control form-control-lg ${this.props.contractError.address || !this.props.contract.address ? 'is-invalid' : 'is-valid'}`}
              id="address"
              placeholder="0x0000000000000000000000000000000000000000"
              ref={(e) => this.address = e}
              onChange={this.handleAddressChange}
              value={this.props.contract.address || ''}
              required
            />
            {this.props.contractError.address && <div className="invalid-feedback">{this.props.contractError.address}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="abi">Contract ABI</label>
            <textarea
              className={`form-control form-control-lg ${this.props.contractError.abi || !this.props.contract.abi ? 'is-invalid' : 'is-valid'}`}
              id="abi" rows="15"
              ref={(e) => this.abi = e}
              onChange={this.handleAbiChange}
              value={this.props.contract.abi || ''}
              required
            ></textarea>
             {this.props.contractError.abi && <div className="invalid-feedback">{this.props.contractError.abi}</div>}
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Explore</button>
          </div>
        </form>
      </div>
    ];
  }
}

