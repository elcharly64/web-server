import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

dotenv.config();
hbs.registerPartials(__dirname + '/views/partials');

const app = express();
const port = process.env.PORT;
app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.render('home',{
    titulo: 'Curso de Node',
    nombre: 'Carlos Utrera'
  });
});
app.get('/elements', (req, res)=> {
  // res.sendFile(__dirname+'/public/generic.html')
  res.render('elements',{
    titulo: 'Curso de Node',
    nombre: 'Carlos Utrera'
  });
  });
app.get('/generic', (req, res)=> {
    // res.sendFile(__dirname+'/public/generic.html')
    res.render('generic',{
      titulo: 'Curso de Node',
      nombre: 'Carlos Utrera'
    });
    });
app.get('*', (req, res)=>{
  res.sendFile(__dirname+'/public/404.html')
});
    
app.listen(port,()=>{
  console.log(`Escuchando el puerto ${port}...`);
});
