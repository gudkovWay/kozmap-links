import { eslint } from '@siberiacancode/eslint';

export default eslint({
  typescript: true,
  jsx: true,
  jsxA11y: true,
  react: true,
  stylistic: true
}, {
  rules: {
    'node/prefer-global/process': ['error', 'always'],
    'siberiacancode-react/prop-types': 'off',
    'style/max-len': [
      'warn',
      120,
      2,
      { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }
    ]
  }
});
