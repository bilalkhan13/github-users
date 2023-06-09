{
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "globals": {
      "ts-jest": {
        "tsconfig": "tsconfig.json"
      }
    }
  }
}
