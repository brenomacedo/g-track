module.exports = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/out/']
}
