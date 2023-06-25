import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {register} from './controllers/user.js';
import authRoutes from './routes/auth.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());



/*Route*/
app.use("/",authRoutes);
app.use("/userregister",register);

/*MONGOOSE SETUP*/
const PORT=process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then(()=>{
    app.listen(PORT,()=>console.log('Server port:'+PORT));
}).catch((err)=>{console.log(err)});
