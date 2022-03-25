//Syncronus exaxple
/*const { unlinkSync } = require("fs");


try {
  unlinkSync("DeleteFile.js");
  console.log("File was deleted");
} catch (error) {
  console.log(error);
}*/

//Call Back
// const { unlink } = require("fs");

// unlink("DeleteFile.js", (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("file was deleted");
// });

//Promise
//  const {unlink} = require('fs/promises');

// (async  function(path) {
//   try {
//     await unlink(path);
//     console.log(`File was deleted ${path}`)
//   } catch (error) {
//     console.error('error message', error.message)
//   }
//  })('DeleteFile.js');

const path = require("path");

const curDir = path.resolve();
console.log(curDir);

const filePath = path.join(curDir, "package.json");
console.log(filePath);
console.table(path.parse(filePath));
