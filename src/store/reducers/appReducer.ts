import { AppActionType, AppTypes } from '../actions/appActionsTypes';

interface Istate {
  popover: boolean;
  editPos: DOMRect;
}

const INITIAL_STATE: Istate = {
  popover: false,
  editPos: new DOMRect(),
};
export function appReducer(state = INITIAL_STATE, action: AppActionType) {
  switch (action.type) {
    case AppTypes.SET_POPOVER:
      return { ...state, popover: action.popover };
    case AppTypes.SET_EDITPOS:
      return { ...state, editPos: action.editPos };
    default:
      return state;
  }
}
