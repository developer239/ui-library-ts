const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  })
  config.plugins.push(new TSDocgenPlugin()) // optional
  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./'),
  ]

  return config
}
