export default (endpoints = {
	login:
		'http://ecsc00a02fb3.epam.com/rest/default/V1/integration/customer/token',
	products: (number, currentPage) =>
		`http://ecsc00a02fb3.epam.com/rest/default/V1/products?searchCriteria[pageSize]=${number}&searchCriteria[currentPage]=${currentPage}`,
	cart: 'http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine',
	addToCart: 'http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items',
	itemsInCart: 'http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items',
	deleteFromCart: id =>
		`http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items/${id}`,
});
