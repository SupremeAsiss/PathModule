const path = require('path');

//console.log(path.dirname('C:\Users\DELL\Desktop\NodePC\pathModule\path.js'));

//console.log(path.extname('C:\Users\DELL\Desktop\NodePC\pathModule\path.js'));

console.log(path.basename('C:\Users\DELL\Desktop\NodePC\pathModule\path.js'));
const myPath = path.parse('C:\Users\DELL\Desktop\NodePC\pathModule\path.js');
console.log(myPath.root);