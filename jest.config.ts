import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', 
  testEnvironment: 'node', 
  moduleFileExtensions: ['ts', 'js'], 
  transform: {
    '^.+\\.ts$': 'ts-jest', 
  },
  testMatch: ['**/tests/**/*.test.ts'], 
  collectCoverage: true, 
  coverageDirectory: 'coverage', 
  collectCoverageFrom: ['src/**/*.ts'], 
};

export default config;
