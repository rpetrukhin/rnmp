export function saveToken(token) {
	return {
		type: 'SAVE_TOKEN',
		payload: { token },
	};
}
