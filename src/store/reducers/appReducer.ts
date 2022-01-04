const INITIAL_STATE = {
  popover: false,
  editPos:''
  }
  export function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_POPOVER':
        return {...state, popover: action.popover }
      case 'SET_EDITPOS':
        return {...state, editPos: action.editPos }
      default:
        return state
    }
  }