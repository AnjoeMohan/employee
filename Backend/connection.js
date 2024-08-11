const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://shaandhan123:shaandhan123@cluster0.mzf07xr.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})

