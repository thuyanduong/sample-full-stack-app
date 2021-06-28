import {useState, useEffect} from 'react'
import logo from '../logo.svg';
import '../App.css';
import backEndURL from '../_helpers/url'
import Static from './Static'
import UsersList from './UsersList'
import User from '../models/User'
import Comment from '../models/Comment'

interface AppProps {
  comment: Comment
}

function App(props: AppProps): React.ReactElement<AppProps> {
  const [users, setUsers] = useState<User[]>([])

  useEffect(()=>{
    fetch(`${backEndURL}/users`)
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "{props.comment.content}" said by {props.comment.author}
        </p>
        <Static />
        <UsersList users={users}/>
      </header>
    </div>
  );
}

export default App;