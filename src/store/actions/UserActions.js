class UserAction {
    static SET_USER = "GET_USER";
    static UNSET_USER = "UNSET_USER";
    static GET_USER_DATA = "GET_USER_DATA"
    static setUser(data) {
        return {
            type: this.SET_USER,
            data
        }
    }
    static unsetUser(data) {
        return {
            type: this.UNSET_USER,
            data
        }
    }
    static setUserData(data){
        return{
            type: this.GET_USER_DATA,
            data
        }
    }

}
export default UserAction;