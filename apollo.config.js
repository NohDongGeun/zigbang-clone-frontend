module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "zigbang-clone-backend",
      url: "https://eroom-backend.herokuapp.com/graphql",
    },
  },
};
