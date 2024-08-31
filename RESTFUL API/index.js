const express=require('express');
const users=require('./MOCK_DATA.json');
const fs=require('fs')

const app=express();
app.use(express.urlencoded({extended:false}));


app.use((req,res,next)=>{
 console.log("hello from middleware 1")
 fs.appendFile('log.txt',`\n${Date.now()}: ${req.method}:${req.path}`,(err,data)=>{
    next();})
 req.myUserName="balakrishna";

next();


})

app.use((req,res,next)=>{
 console.log("hey")
 console.log("hello from middleware 2", req.myUserName)
    res.send("Hello world")
})

app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}

    </ul>
    `;
    res.send(html);
})

app.get("/api/users",(req,res)=>{
    // res.setHeader("myName","Balakrishna")
    console.log(req.headers)

    return res.json(users);
});

app.route('/api/users/:id')
.get((req,res)=>{
        const id=Number(req.params.id);
        const user=users.find((user)=>user.id===id);
        return res.json(user);
    
    })
    .patch((req,res)=>{
            //todo:edit the user with id
            return res.json({status:"pending"});
        
        })
        .delete((req,res)=>{
                //todo:delete the user with id
                return res.json({status:"pending"});
            });


// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user);

// });

app.post('/api/users/',(req,res)=>{
    const body =req.body;
    console.log(body);
    
    //todo:create user route
    return res.json({status:"pending"});
});

// app.patch("/api/users/:id",(req,res)=>{
//     //todo:edit the user with id
//     return res.json({status:"pending"});

// })

// app.delete("/api/users/:id",(req,res)=>{
//     //todo:delete the user with id
//     return res.json({status:"pending"});
// })



const PORT=8000;

app.listen(PORT,()=>console.log(`Server started at ${PORT}`));
