import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Loading...")

useEffect(() => {
  fetch(import.meta.env.VITE_API_URL + "/")
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => setMessage("Error: " + err));
}, []);



  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>LMS Frontend 🚀</h1>
      <p>Backend says: {message}</p>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
