import express from 'express';
import 'dotenv/config';
import router from './route/router.js';

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res) => {
  res.status(404).render('error404');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
