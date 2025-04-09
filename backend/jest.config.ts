/** @type {import('ts-jest').JestConfigWithTsJest} **/
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testTimeout: 5000,
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        outputPath: 'reports/test-report.html',
        pageTitle: 'OU Insight Hub Test Report',
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

export default config;