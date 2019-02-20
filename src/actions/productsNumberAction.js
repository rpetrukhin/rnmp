export function setProductsNumber(number) {
	return {
		type: 'SET_PRODUCTS_NUMBER',
		payload: { number },
	};
}

export function addProduct() {
	return {
		type: 'ADD_PRODUCT',
	};
}

export function deleteProduct(number) {
	return {
		type: 'DELETE_PRODUCT',
		payload: { number },
	};
}
