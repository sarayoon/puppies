import { RECEIVE_PUPPIES } from './action-creators';

const initialState = {
  allPuppies: [],
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_PUPPIES:
      newState.allPuppies = action.puppies;
      return newState;
    default:
      return state;
  }
}

export default reducer;
