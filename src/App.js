import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/style.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
        console.log(response.data.results[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);

  return (

    <>
    {user && (
      
    <div className="card_outer_body">
      
       <div className='card_inner_body'>
          <div className='card_inner_body_left'>
          <img className='card_inner_body_left_img' src={user.picture.large} alt="" />
          </div>
          <div className='card_inner_body_right'>
              <div className="card_inner_body_left_name">
                <span>
                  {user.name.first}
                </span>
                <span>
                  {user.name.last}
                </span>
              </div>

              <div className='card_inner_body_left_gender'>
                  <p>
                    {`${user.gender.toUpperCase()}`}
                  </p>
              </div>
              <div className='card_inner_body_left_phonenumber'>
                <p>
                  {user.phone}
                </p>
              </div>
          </div>
       </div>
     
    </div>
    
    )}
    </>
  );
}

export default App;
