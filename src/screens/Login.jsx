import React,{useContext} from 'react'
import {AuthContext} from '../AuthContext'

export default function Login () {
  const {login} = useContext(AuthContext)
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>LOGIN PAGE</h1>
        <button onClick={login}><h2>Log In With google</h2></button>
      </header>
    </div>
  );
}
