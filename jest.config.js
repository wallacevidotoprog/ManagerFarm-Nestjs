module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',  // Mapeia alias 'src' para a pasta real
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',          // Testes terminados em .spec.ts
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
