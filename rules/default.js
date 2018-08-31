module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	rules: {
		'comma-dangle': [2, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'padded-blocks': 0,
		'indent': [1, 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
        'no-underscore-dangle': [2, { 'allow': ['_id', '__v'] } ],
        'no-param-reassign': [2, { 'props': false }],
        'object-shorthand': [2, 'never'],
        'new-cap': [2, { 'capIsNewExceptions': ['Router', 'ObjectId'] }],
		'linebreak-style': 0,
		'max-len': [1, 120],
		'no-plusplus': 0
	}
};
