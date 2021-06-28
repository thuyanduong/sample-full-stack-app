const db = require('../db/config')

interface DBResults {
  rows: {
    id: number, 
    name: string
  }[]
}
 
class User {

  static getAllUsers(){
    const queryText = "SELECT * FROM users ORDER BY id";
    return db.query(queryText).then((results: DBResults) => results.rows)
  }

  static getUser(id: number){
    const queryText = "SELECT * FROM users WHERE id = $1"
    return db.query(queryText, [id]).then((results: DBResults) => results.rows[0])
  }

}

module.exports = User
