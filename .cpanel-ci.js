// .cpanel-ci.js

import { deploy, excludeDefaults } from "@samkirkland/ftp-deploy";

async function deployToCPanel() {
  console.log("🚚 Deploy started");
  await deploy({
    server: "ftp.futureconnect.rw",
    username: "futureconnect",
    password: "AltisCorolla@2008",
    "server-dir": "/website/",
    exclude: [...excludeDefaults, ".env", ".git/**", "node_modules/**", "vendor/**"],
  });
  console.log("🚀 Deploy done!");
}

deployToCPanel();