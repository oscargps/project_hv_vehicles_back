import express from 'express';
import literalRouter from './routes/literal.router'
import userRouter from './routes/user.router';
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('/literals',literalRouter );
app.use('/user',userRouter );

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});