

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
router.delete('/:suppr', (req, res) => {
    let suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});

// on dit a l'application d'utiliser notre routeur sur 
// le chemin /todo 
// toutes les routes definies dedans devrons donc etre 
// precedees de /todo
app.use('/todo', router);
app.listen(3000);
