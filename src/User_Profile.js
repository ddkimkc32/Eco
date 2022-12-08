import './index.css';
import {useRef, useState, useEffect} from 'react';
import Login from './Login';
import * as React from 'react';
import {Card} from 'antd';
import { Input, List, Avatar } from 'antd';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const User_Profile = () => {
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [results, setResult] = useState('')

  return (
    <div className='body'>
      <div className='profile_info'>
          <div className='picture'>
              <img className='profile_picture' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/profile-design-template-4c23db68ba79c4186fbd258aa06f48b3_screen.jpg?ts=1581063859' alt='Profile Picture'/>
          </div>
          <div className='user_info'>
              <h3 className='user_name'>ECO</h3>
              <div className="user_details">
                  <h5>Score:</h5>
                  <p  className='score'>500</p>
                  <h5>Friends:</h5>
                  <p className='friends'>10</p>
              </div>
              <div className='bio'>
                  <p>This is Eco</p>
              </div>
          </div>
      </div>
      <div id='post'>
        <form id='post-form' onSubmit={(e) => {

            e.preventDefault();
            fetch('/post', {
              method: 'POST', 
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  id: id,
                  username: username,
                  content: content
              }),
              })
            }}
          >
          <label> Write Post: 
            <input type ="text" name= "id" onChange={(e) => setId(e.target.value)}/>
            <input type ="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" name="Write something" onChange={(e) => setContent(e.target.value)}/>
          </label>
          <input type="submit" value="Post" />
        </form>
      </div>
      <div className='posts'>
          <div className='post'>
            <img src='###' alt='post'></img>
            <p>This is a plane</p>
          </div>
      </div>
      <p>
          <span className="Line">
              {/*put Log out link here*/}
              <a href="/Login">Log Out</a>
          </span>
      </p>
    </div>
  )
}

export default User_Profile
