const fs = require("fs");

fs.readFile("b.txt","utf-8",(err,data)=>{
console.log(data);
console.log(err);
});


    

console.log("why u running");