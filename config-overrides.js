const { injectBabelPlugin } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)
  config = rewireCssModules(config, env);
  return config;
};