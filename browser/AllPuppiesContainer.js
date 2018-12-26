import React from 'react';
import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { fetchPuppies } from './action-creators';

const AllPuppiesContainer = props => {
  console.log('AllPuppiesContainer rendered');
  render(
    <div>
      <h1>RAWR BITCHES</h1>
      <AllPuppies />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allPuppies: state.allPuppies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPuppies: () => dispatch(fetchPuppies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPuppies);
