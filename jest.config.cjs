module.exports = {
  verbose: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.(ts|tsx)", "<rootDir>/src/App.tsx"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/vite-env.d.ts",
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/i18Next.ts",
  ],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
