//FileSystem
//files -> create   ,  read,             update ,     delete
//open - w        readfilesync           append       unlinksync
//writefilesync 
let fs = require("fs");
let buffer = fs.readFileSync("abc.js");
// console.log("bin data" + " : " + buffer)

//fs.openSync("abc.txt","w")

//no file-> create and file exist->content gets replaced
// fs.writeFileSync("abc.txt","This is just some random text and writeFileSync overwrites text in the file")

// update
// fs.appendFileSync("abc.txt","This is appended content")


//Folders
//Create - mkdirSync
//Read - readdirSync
//Delete - rmdirSync
//Create a directory
// fs.mkdirSync("myDirectory")
//Make file and put content in it
//fs.writeFileSync("myDirectory/myfile.txt","My content")

// let content = fs.readdirSync("myDirectory")
// console.log(content)
// for(let i = 0;i<content.length;i++)
// {   //Delete all files inside the directory one by one
//     fs.unlinkSync("myDirectory/"+content[i])
// }
//Remove the folder
// fs.rmdirSync("myDirectory")
//fs.existSync -> If a file exists at a path -> returns true/false 
// let doesPathExist = fs.existsSync("abc.txt")
// console.log(doesPathExist)
// doesPathExist = fs.existsSync("abcd.txt")
// console.log(doesPathExist)
// //fs.lstatsync-> we can know whether path specified is for a folder or a file
// let detailsobj = fs.lstatSync(__dirname + "\\fileSystem.js")
// let ans = detailsobj.isFile();
// console.log(ans)
// ans = detailsobj.isDirectory()
// console.log(ans)

for(let i =1;i<=10;i++)
{
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md",`readme for ${dirPathToMake}`)
}