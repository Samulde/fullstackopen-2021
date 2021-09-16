const initialMessage = "First Message"


const notificationReducer = ( state = initialMessage, action) => {
    console.log(action)
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

        setTimeout(() => {
            dispatch({
                type: 'CHANGE_MESSAGE',
                message: null
            })
        }, time * 1000)
}}

export default notificationReducer
