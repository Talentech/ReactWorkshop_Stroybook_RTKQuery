const path = require("path");
const root = path.resolve(__dirname, "./..");

module.exports = {
  root,
  app: path.join(root, "src/index.tsx"),
  silentRenew: path.join(root, "src/auth/silent_renew/index.js"),
  assets: path.join(root, "src/assets"),
  aliases: {
    "@components": path.resolve(root, `./src/components/`),
    "@pages": path.resolve(root, `./src/pages/`),
    "@services": path.resolve(root, `./src/services`),
    "@utils": path.resolve(root, `./src/utils/`),
    "@store": path.resolve(root, `./src/store/`),
    "@auth": path.resolve(root, `./src/auth/`),
    "@mocks": path.resolve(root, `./src/__mocks__/`),
  },
};
