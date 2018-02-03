module.exports = {
  verbose: true,
  notify: true,
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '.(ts|tsx)': './node_modules/ts-jest/preprocessor.js'
  },
  mapCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  setupFiles: ['./tests/shim.js'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};
