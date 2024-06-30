import { v1 as uuidv1} from 'uuid'

export const BidReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BID':
            return {
                amount: action.bid.amount,
                user: action.bid.user,
                id: uuidv1()
            }

        default:
            return state
    }
}