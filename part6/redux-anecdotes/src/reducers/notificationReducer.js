const initialMessage = "First Message"


const notificationReducer = ( state = initialMessage, action) => {

    switch (action.type) {
        case 'CHANGE_MESSAGE' :
            return action.message
        default:
            return state
    }
}

export const messageChange = message => {
    return {
        type: 'CHANGE_MESSAGE',
        message
    }
}

export default notificationReducer
