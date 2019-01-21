export default (endpoints = {
	login:
		'http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token',
	products: (number, currentPage) =>
		`http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=${number}&searchCriteria[currentPage]=${currentPage}`,
});
