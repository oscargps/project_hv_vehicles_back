import express from 'express';
import literalRouter from './routes/literal.router'
import userRouter from './routes/user.router';
import vehicleRouter from './routes/vehicle.router';
import recordRouter from './routes/record.router';
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('/user',userRouter );
app.use('/vehicles',vehicleRouter );
app.use('/records',recordRouter );

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});