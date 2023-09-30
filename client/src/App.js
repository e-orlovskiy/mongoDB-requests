import { useState } from 'react'
import './App.css';

function App() {

  const [allUsers, setAllUsers] = useState([])
  const [userById, setUserById] = useState('')
  const [text1, setText1] = useState('')


  const getAllUsers = () => {
    fetch('http://localhost:3002/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllUsers(data)
      })
      .catch(error => {
        //error
      })
  }

  const getUserById = () => {
    fetch(`http://localhost:3002/users/${text1}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserById(data)
      })
      .catch(error => {
        //error
      })
  }

  return (
    <div className='container'>

      <div className="section-1">
        <button className='button-1' onClick={() => { getAllUsers() }}>btn</button>
        <div className="result result-1">{allUsers.map(el => <span key={el._id}>{el.nickname}</span>
        )}</div>
      </div>

      <div className="section-2">
        <button className='button-2'>btn</button>
        <div className="result result-2"></div>
      </div>

      <div className="section-3">
        <input
          type="text"
          className='input input-3'
          onChange={(e) => {
            { setText1(e.target.value) }
          }}
        />
        <button className='button-3' onClick={() => { getUserById() }}>btn</button>
        <div className="result result-3">{userById.nickname}</div>
      </div>

      <div className="section-4">
        <input type="text" className='input input-4' />
        <button className='button-4'>btn</button>
        <div className="result result-4"></div>
      </div>

      <div className="section-5">
        <div className="inputs">
          <input type="text" className='input input-51' />
          <input type="text" className='input input-52' />
          <input type="text" className='input input-53' />
        </div>
        <button className='button-5'>btn</button>
        <div className="result result-5"></div>
      </div>

      <div className="section-6">
        <input type="text" className='input input-6' />
        <button className='button-6'>btn</button>
        <div className="result result-6"></div>
      </div>

      <div className="section-7">
        <input type="text" className='input input-7' />
        <button className='button-7'>btn</button>
        <div className="result result-7"></div>
      </div>

      <div className="section-8">
        <input type="text" className='input input-8' />
        <button className='button-8'>btn</button>
        <div className="result result-8"></div>
      </div>


    </div>
  )

}

export default App;
