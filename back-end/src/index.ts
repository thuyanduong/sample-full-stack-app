import express, {Request, Response} from 'express'
const cors = require('cors');
const usersRouter = require('./users/usersRouter')

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "Hello, World!"})
})

app.use('/users', usersRouter)

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
