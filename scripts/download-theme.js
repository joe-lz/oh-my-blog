const download = require("download-git-repo");
const fs = require("fs");
const rimraf = require("rimraf");
const config = require("../omb.config.js");

Object.keys(config.theme).map((themeName) => {
  download(config.theme[themeName], `temp_theme/${themeName}`, async (err) => {
    await copyFolder({
      oldPath: `temp_theme/${themeName}/pages`,
      newPath: `src/pages/${themeName}`,
    });
    await copyFolder({
      oldPath: `temp_theme/${themeName}/components`,
      newPath: `src/components/${themeName}`,
    });
  });
});

const copyFolder = ({ oldPath, newPath }) => {
  return new Promise((resolve, reject) => {
    rimraf.sync(newPath);
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
