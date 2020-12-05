
const GET_USER = 'detail/GET_USER'
const LOADING = 'detail/LOADING'
const GET_ERROR = 'detail/GET_ERROR'

export const getUser = user => ({type: GET_USER, user})
export const loadingStart = () => ({type: LOADING})
export const getError = error => ({type: GET_ERROR, error})

const INITIAL_STATE = {
  loading: null,
  user: null,
  error: null
}

export default function detailReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}