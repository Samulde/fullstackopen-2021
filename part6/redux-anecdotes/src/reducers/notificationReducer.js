const initialMessage = "First Message"

let timeId = null

const notificationReducer = ( state = initialMessage, action) => {
    switch (action.type) {
        case 'CHANGE_MESSAGE' :
            return action.message
        default:
            return state
    }
}

export const messageChange = (message, time) => {
    return async dispatch => {

        dispatch({
            type: 'CHANGE_MESSAGE',
            message
        })

        clearTimeout(timeId)
        timeId = setTimeout(() => {
            dispatch({
                type: 'CHANGE_MESSAGE',
                message: null
            })
        }, time * 1000)

}}

export default notificationReducer
