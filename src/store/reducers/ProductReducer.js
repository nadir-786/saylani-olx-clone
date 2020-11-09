import ProductActions from '../actions/ProductActions'
const ProductReducer = (state = {
   products:[]
}, action) => {
    switch (action.type) {
        case ProductActions.SET_PRODUCTS:
            return {
                ...state,
                products:[...action.data]
            }
          
        default:
            return state
    }
}

export default ProductReducer;