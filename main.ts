

import {Todo} from './todo';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const todo = new Todo();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const router = express.Router();

// router permettant de recuperer les todos
router.get('/', (req, res) => {
    res.json(todo.lister())
});

// router permettant d'ajouter un todo
    router.post('/', (req, res) => {
        let nouveau = req.body.nouveau;
        todo.ajouter(nouveau);
        res.end('todo ajouté');
});
        // router qui permets d'effacer un todo
router.delete('/', (req, res) => {
    let suppr = req.body.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});

// on appel le serveur sur port 3000 
app.use('/todo', router);
app.listen(3000);
