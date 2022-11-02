import React from 'react';
import './index.css';

const User_Profile = () => {
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
      <div className='posts'>
          <div className='post'>
            <img src='###' alt='post'></img>
            <p>This is a plane</p>
          </div>
      </div>
    </div>
  )
}

export default User_Profile
