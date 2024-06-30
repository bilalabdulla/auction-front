import { v1 as uuidv1} from 'uuid'

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                name: action.user.name,
                email: action.user.email,
                id: uuidv1()
            }]
        case 'REMOVE_USER': 
            return state.filter((item) => item.id !== action.id)
        case 'ADD_USER_BID':
            return[...state, {...state, bid: action.user.bid}]
        default:
            return state
    }
} 