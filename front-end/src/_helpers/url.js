require('dotenv').config()

const URL = process.env.NODE_ENV === 
  'production' ? 'https://anns-sample-back-end.herokuapp.com' : 'http://localhost:4000'

export default URL;

