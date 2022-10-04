module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["cobertura", "lcov"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@store/(.*)": "<rootDir>/src/store/$1",
    "@auth/(.*)": "<rootDir>/src/auth/$1",
    "@mocks/(.*)": "<rootDir>/src/__mocks__/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom-fourteen",
  testURL: "http://localhost",
};
