module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'scope-case': [2, 'always', 'upper-case'],
        'scope-min-length': [2, 'always', 5]
    },
    ignores: [
        (message) => message.includes('chore(release)')
    ]
};
