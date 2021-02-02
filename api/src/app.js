import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {createUser, createNotes} from './initialSetup';

import authRoutes from './routes/auth.routes';
import notesRoutes from './routes/notes.routes';



const app = express();
createUser();
createNotes();

//Settings
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//Routes
app.use('/api', authRoutes);
app.use('/api/notes/', notesRoutes);

export default app;