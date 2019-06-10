module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	rules: {
		'arrow-parens': [2, 'as-needed'],
		'comma-dangle': [2, 'never'],
		indent: [1, 'tab', { SwitchCase: 1 }],
		'linebreak-style': 0,
		'max-len': [1, 120],
		'new-cap': [2, { capIsNewExceptions: ['Router', 'ObjectId'] }],
		'no-param-reassign': [2, { props: false }],
		'no-plusplus': 0,
		'no-underscore-dangle': [2, { allow: ['_id', '__v'] }],
		'no-tabs': 0,
		'object-curly-newline': 0,
		'object-shorthand': ['error', 'always'],
		'padded-blocks': 0
	}
};
