module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true, node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};