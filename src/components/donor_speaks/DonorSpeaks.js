import React, { Component } from 'react';
import './DonorSpeaks.css';
import { connect } from 'react-redux';
import { fetchDonorSpeaks } from '../../redux/actions/donorspeaks';

const mapStateToProps = (state) => {
  return {
    donorSpeaks: state.donorspeaks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDonorSpeaks: () => dispatch(fetchDonorSpeaks()),
  };
};

class DonorSpeaks extends Component {
  componentDidMount() {
    this.props.fetchDonorSpeaks();
  }

  renderDonorSpeaks = (donorSpeaks, key) => {
    return (
      <div className='column' key={key}>
        <div className='card-ds'>
          <p>{donorSpeaks.description}</p>
          <p className='donorName'>{donorSpeaks.author.username}</p>
        </div>
      </div>
    );
  };
  render() {
    if (this.props.donorSpeaks.isLoading) {
      return <h1>Loading</h1>;
    } else if (this.props.donorSpeaks.errMess) {
      return <h1>{this.props.donorSpeaks.errMess}</h1>;
    }

    return (
      <div className='container'>
        <div className='title'>
          <h2 data-text='Donor Speaks'>Donor Speaks</h2>
        </div>
        <hr className='sep-2' />
        <div className='row'>
          {this.props.donorSpeaks.donorSpeaks.map((item, key) =>
            this.renderDonorSpeaks(item, key)
          )}
          {/* {this.renderDonorSpeaks(this.props.donorSpeaks)} */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorSpeaks);
