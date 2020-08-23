const fs = require('fs')
const rimraf = require('rimraf')

rimraf.sync('.gitignore')
fs.rename('scripts/replace-gitignore/.gitignore.template', '.gitignore', (err) => {
  console.log(err);
})
