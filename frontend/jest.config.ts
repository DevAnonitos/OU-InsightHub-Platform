import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testTimeout: 5000,
  testMatch: ["**/__tests__/units/**/*.test.ts"],
  // transform: {
  //   "^.+\\.jsx?$": "babel-jest"
  // },
  // transformIgnorePatterns: [
  //   "/node_modules/(?!(react-social-icons)/)"
  // ],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // '^@/components/(.*)$': '<rootDir>/components/$1',
    '^react-social-icons(.*)$': '<rootDir>/__mocks__/react-social-icons.tsx',
    '^@/components/(.*)$': '<rootDir>/__mocks__/components/$1',
    '^@/next/(.*)$': '<rootDir>/__mocks__/next/$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        outputPath: 'reports/test-report.html',
        pageTitle: 'OU Insight Hub - Test Report',
        logo: 'https://my.cdn.com/assets/logo.png',
        sort: 'fail-first',
        showDuration: true,
        customInfos: [
          { title: 'Tested At', value: new Date().toLocaleString() },
          { title: 'Node Version', value: process.version },
          { title: 'Total CPUs', value: require('os').cpus().length.toString() },
        ],
      },
    ]
  ],
  testResultsProcessor: './node_modules/jest-html-reporter',
};

export default createJestConfig(config);