export function onSetPopover(popover) {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_POPOVER',
                popover
            })
        } catch (err) {
            console.log('Cannot set popover', err)

        }
    }
}

export function onSetEditPos(elPos) {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_EDITPOS',
                editPos: elPos
            })
        } catch (err) {
            console.log('Cannot set elPos', err)

        }
    }
}

