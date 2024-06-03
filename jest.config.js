module.exports = {
  testMatch: undefined,
  testRegex: "[a-zA-Z]*\\.(test|spec)\\.[jt]s?$",
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.(js|mjs)x?$": "babel-jest",   //using it with ts mean the described TS Sysntax Error. Without the preset in previous line is needed
    ".*\\.(vue)$": "@vue/vue3-jest"
  },
  moduleNameMapper: {
    // ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":"<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^vuetify/components$": "<rootDir>/node_modules/vuetify/lib/components/index.mjs",
    "^vuetify/directives$": "<rootDir>/node_modules/vuetify/lib/directives/index.mjs"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!vuetify|axios)/", // Switching these of means an import Error on Axios. Removing vuetify from there makes no difference to the previously mentioned Errors. 
  ],
  // setupFilesAfterEnv: ["./tests/unit/setup.ts"],
};
