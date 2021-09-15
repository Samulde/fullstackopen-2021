const INITIAL_FILTER = null


const filterReducer = (state = INITIAL_FILTER, action) => {

    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.filter
        default:
            return state
    }

}

export const changeFilter = filter => (
    {
        type: 'CHANGE_FILTER',
        filter
    }
)


export default filterReducer