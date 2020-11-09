class UserAction {
    static SET_PRODUCTS = "SET_PRODUCTS";
    
    static setProducts(data) {
        return {
            type: this.SET_PRODUCTS,
            data
        }
    }
    
}
export default UserAction;