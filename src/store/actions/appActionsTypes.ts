export enum AppTypes {
  SET_POPOVER = 'SET_POPOVER',
  SET_EDITPOS = 'SET_EDITPOS',
}

interface SetPopover {
  type: AppTypes.SET_POPOVER;
  popover?: boolean;
}
interface SetEditPos {
  type: AppTypes.SET_EDITPOS;
  editPos?: DOMRect;
}

export type AppActionType = SetPopover | SetEditPos;
