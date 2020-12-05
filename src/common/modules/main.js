
const GET_USERS = 'GET_USERS';
const LOADING = 'LOADING';

export const getUsers = (users) => ({
  type: GET_USERS,
  users
})

export const loadingStart = () => ({ type: LOADING })

const INITIAL_STATE = {
  loading: false,
  users: null,
  error: null,
}

export default function mainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}