/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json','text','lcov','text-summary'],
  moduleFileExtensions: ['js', 'jsx','mjs','cjs','ts','tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
