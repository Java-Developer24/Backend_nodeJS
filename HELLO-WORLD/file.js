const fs=require('fs');
const os=require('os');

console.log(os.cpus().length);
//sync call
// fs.writeFileSync('./test.txt',"Hey Backend Dev");

//Async call
// fs.writeFile("./test.txt","hello world Async",(err)=>{});

//read file sync all
// const result=fs.readFileSync("./contact.txt","utf8");


// console.log(result);

// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//         else{

//             console.log( result);
//         }
        
    
// });
// fs.appendFileSync('./test.txt',"hey there\n");
// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync('./copy.txt')
