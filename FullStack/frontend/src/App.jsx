import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
 const [jokes,setJokes] = useState([]);

 useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    console.log(response.data);
    
    setJokes(response.data);
  }).catch((error)=>{
    console.log(error);
    
  })
 },[])

  return (
    <>
      <h1>CHAI AUR FULLSTACK</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke,index)=>{
          return  <div key={index}>
            <h3>{joke.joke}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
