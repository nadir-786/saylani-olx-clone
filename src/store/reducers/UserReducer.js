import UserActions from '../actions/UserActions'
const UserReducer = (state = {
    user: null,
    isLogged: false,
    loading:true,
    userData:null
}, action) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return {
                ...state,
                isLogged: true,
                loading:false,
                userData:action.data
            }

        case UserActions.UNSET_USER:
            return {
                ...state,
                isLogged: false,
                loading:false
            }
            case UserActions.GET_USER_DATA:
                return{
                    ...state,
                    userData:[action.data]
                }
        default:
            return state
    }
}

export default UserReducer;