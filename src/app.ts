import express from 'express';
import sequelize  from './config/database';
import authRoutes from './routes/authRoutes';
import chatRoutes from  './routes/chatRoutes';


const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 3000;
sequelize
.sync()
.then(() => {
    console.log('DATABASE CONNECTED');
    app.listen(PORT, ()=>console.log('Server  is running on port', PORT));
})
.catch((error)=>console.error('Failed to Connect:', error));

