module.exports = {
    clearMocks: true,
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}