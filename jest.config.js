const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@/services/(.*)$': '<rootDir>/app/services/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/api/(.*)$': '<rootDir>/app/api/$1'
  },
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
