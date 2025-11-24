// /** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/file.Mock.js',
//     '^@/(.*)$': '<rootDir>/Src/$1',
//     '^~/components/(.*)$': '<rootDir>/Src/Components/$1',
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-typescript'] }],
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   testMatch: ['<rootDir>/Src/Tests/**/*.test.(ts|tsx|js|jsx)'],
//   collectCoverageFrom: ['Src/**/*.{ts, tsx}', '!Src/**/*.d.ts', '!Src/main.tsx'],
//   clearMocks: true,
// }
