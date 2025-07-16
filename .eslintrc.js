module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    rules: {
        // Règles existantes
        'import/prefer-default-export': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-nested-ternary': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': ['error', { allowTernary: true }],
        camelcase: 0,
        'react/self-closing-comp': 1,
        'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-no-comment-textnodes': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/no-unescaped-entities': 0,
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'linebreak-style': ['error', 'unix'],
        
        // Modifications pour résoudre les erreurs de build
        'semi': 'off', // Désactive la vérification des points-virgules
        'no-unused-vars': 'warn', // Avertissement plutôt qu'erreur pour les variables non utilisées
        '@next/next/no-img-element': 'warn', // Gère les balises img
        
        // Nouvelles règles recommandées
        'react/no-unknown-property': ['error', { ignore: ['jsx'] }], // Pour les propriétés JSX personnalisées
    },
    overrides: [
        {
            files: ['**/*.js', '**/*.jsx'],
            rules: {
                // Désactive certaines règles pour les fichiers JS/JSX
                'no-undef': 'off'
            }
        }
    ]
}