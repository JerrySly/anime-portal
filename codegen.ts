const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  documents: ["src/**/*.ts"],
  generates: {
    "./src/shared/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;