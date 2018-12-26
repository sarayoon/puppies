import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = puppies => {
  return {
    type: RECEIVE_PUPPIES,
    puppies,
  };
};

export const fetchPuppies = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get('/api/puppies');
      console.log('data is ', data);
      dispatch(receivePuppies(data));
    } catch (err) {
      console.error(error);
    }
  };
};
