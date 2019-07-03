import * as ActionType from '../actions/about'

const initialState = {
  information: '',
}
export function about(state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ABOUT_DATA_SUCCESS:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
