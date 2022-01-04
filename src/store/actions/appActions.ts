import { AppActionType, AppTypes } from './appActionsTypes';
import { Dispatch } from 'redux';

export function onSetPopover(popover: boolean) {
  return async (dispatch: Dispatch<AppActionType>) => {
    try {
      dispatch({
        type: AppTypes.SET_POPOVER,
        popover,
      });
    } catch (err) {
      console.log('Cannot set popover', err);
    }
  };
}

export function onSetEditPos(elPos: DOMRect) {
  return async (dispatch: Dispatch<AppActionType>) => {
    try {
      dispatch({
        type: AppTypes.SET_EDITPOS,
        editPos: elPos,
      });
    } catch (err) {
      console.log('Cannot set elPos', err);
    }
  };
}
