import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  coverageDirectory: "./coverage",
  testMatch: [
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.test.jsx',
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.test.tsx',
    ],
};
export default config;