/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-postcss"],
  packageOptions: {
    installTypes: true
  },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }]
};
