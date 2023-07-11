module.exports = {
  root: true,
  extends: ["acme"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "apps/web",
      },
    },
  },
};
