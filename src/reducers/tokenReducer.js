const initialState = {
	token: null,
};

export default function tokenReducer(state = initialState, action) {
	switch (action.type) {
		case 'SAVE_TOKEN':
			return {
				...state,
				token: action.payload.token,
			};
		default:
			return state;
	}
}
