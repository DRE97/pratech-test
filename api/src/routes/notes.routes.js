import {Router} from 'express';
import * as noteControllers from '../controllers/notes.controller';
import {verifyToken} from '../middlewares/verifyToken';

const router = Router();

router.get('/allNotes', /*verifyToken,*/ noteControllers.getAllNotes);

router.get('/note/:id', verifyToken, noteControllers.getSingleNote);

router.post('/create', verifyToken, noteControllers.createNote);

router.put('/update/:id', verifyToken, noteControllers.updateNote);

router.delete('/delete/:id', verifyToken, noteControllers.deleteNote);


export default router;