const initialState = {
	productsNumber: null,
};

export default function tokenReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_PRODUCTS_NUMBER':
			return {
				...state,
				productsNumber: action.payload.number,
			};
		case 'ADD_PRODUCT':
			return {
				...state,
				productsNumber: state.productsNumber + 1,
			};
		case 'DELETE_PRODUCT':
			return {
				...state,
				productsNumber: state.productsNumber - action.payload.number,
			};
		default:
			return state;
	}
}
