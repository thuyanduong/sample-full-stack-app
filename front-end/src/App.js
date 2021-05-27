import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import backEndURL from './_helpers/url'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log(`${backEndURL}/users`)
    fetch(`${backEndURL}/users`)
      .then(res => res.json())
      .then(users => {
        console.log(users)
        setUsers(users)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          users.map(user => <div key={user.id}>{user.name}</div>)
        }
      </header>
    </div>
  );
}

export default App;
