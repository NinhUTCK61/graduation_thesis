module.exports = {
  presets: [
    [ 
      "@babel/eslint-parser",
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
