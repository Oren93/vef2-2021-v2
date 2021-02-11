import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

dotenv.config();
const Router = express.Router();
const {
  PORT: port = 3000,
} = process.env;

const app = express();

// TODO setja upp rest af virkni!
//app.use(express.urlencoded({ extended: true }));

app.use(express.static('../views'));
//app.use(express.static('../public'));
//app.use(express.static('styles'));
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));
//app.set('views', './views');
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index", { document: "document",});
});

// Verðum að setja bara *port* svo virki á heroku
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
