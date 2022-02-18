const {
	addBookHandler,
	getAllBookHandler,
	getBookByIdHandler,
	editBookHandler,
	deleteBookHandler
} = require('./handler.js')

const routes = [{
		method: 'POST',
		path: '/books',
		handler: addBookHandler
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBookHandler
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: getBookByIdHandler
	},
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: editBookHandler
	},
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: deleteBookHandler
	},
];


module.exports = routes;