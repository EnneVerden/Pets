module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@': './src',
          '@constants': './src/constants',
          '@theme': './src/theme',
          '@components': './src/components',
          '@navigator': './src/navigator',
          '@pages': './src/pages',
          '@types': './src/types',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
}
