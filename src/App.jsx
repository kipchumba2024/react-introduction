import './App.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Profile from './components/Profile'
import posts from "./data"
import { useState } from 'react'

function App() 
{
  // const name = "Kelvin"
  const [count, setCount] = useState(0)
  const [postsData, setPostData] =useState(posts)
  
  const [username, setUsername]=useState()
  const [email, setEmail]=useState()

  function updateCount()
  {
    setCount(count+1)
  }

  console.log('====================================');
  console.log(username);
  console.log(email);

  console.log('====================================');
 

  return (
    <>
      <h1>REACT COMPONENTS</h1>
  
      <Navbar />

      <Posts posts={postsData} />
      <h1 onClick={ updateCount }>{count}</h1>


      <form action="">
        <input type='email' value={email} required onChange={(e)=> setEmail(e.target.value) }  placeholder='Enter email'/>
        <input type='text' value={username} required onChange={(e)=> setUsername(e.target.value) }  placeholder='Enter username'/>
      </form>
      {/* <button >Click</button> */}


           {/* {
          student_name?
          <Profile student_name={student_name} />
          :
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            You are not Samuel/Rodgers
          </button>
        } */}
    </>
  )
}

export default App
