import React from 'react'
import './home.scss'
import ApiIcon from '@mui/icons-material/Api';
import Wifi from '@mui/icons-material/WifiOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import Rating from '@mui/material/Rating';

export default function Home() {
  return (
    <div className='home'>
      <div className="welcome">
        <div className="welcome-left">
          <div className="welcome-text">
            Create Your Server Easily and Play Minecraft With Friends!
          </div>
          <a href='/servers' className='welcome-button'>Select Server</a>
        </div>
        <img src="/multiplayer.png" alt="" />
      </div>

      <div className="features">
        <div className="feature"><Wifi /> Stable and low ping connection</div>
        <div className="feature"><ApiIcon /> Java and Bedrock Editions</div>
        <div className="feature"><SportsEsportsOutlinedIcon /> Easy to use server panel</div>
        <div className="feature"><PrivacyTipOutlinedIcon /> 24/7 Technical Support</div>
      </div>

      <div className="best-seller">
        <div className="best-seller-left">

          <div className="best-seller-title">
            <img src="/cat.jpg" alt="" />
            <p>Cat Server</p>
            <p className='most-preferred'>Most Preferred</p>
          </div>

          <div className="best-seller-info">

            <div>More than 250 people preferred this server</div>

            <li className="price">$15 per month</li>
            <li className="people">Up to 10 peope</li>
            <li className="locations">+15 server locations</li>

          </div>

          <a href='/servers' className='best-seller-button'>Try It Now</a>

          <div className="discount">10% discount with LUMINO10 code!</div>
        </div>

        <div className="best-seller-right">
          Try our server, which is the most preferred by our users. Enjoy a world full of adventures with your friends!
        </div>
      </div>


      <div className="satisfied-customers">
        <div className="satisfied-customers-left">
          Satisfied Customers!
        </div>

        <div className="comments">
          <div className="comment">
            <div className="user-info">
              <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="" />
                <p className="name">John Doe</p>
              </div>
              <div className="vote">
                <Rating name="no-value" value={5} /> 
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae est ab voluptatibus,
              eum corporis eius! Velit nobis vel maiores reprehenderit aperiam voluptatum? A cupiditate
              molestiae laborum soluta minus pariatur veritatis?
            </p>
          </div>
          <div className="comment">
            <div className="user-info">
              <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="" />
                <p className="name">John Doe</p>
              </div>
              <div className="vote">
                <Rating name="no-value" value={5} /> 
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae est ab voluptatibus,
              eum corporis eius! Velit nobis vel maiores reprehenderit aperiam voluptatum? A cupiditate
              molestiae laborum soluta minus pariatur veritatis?
            </p>
          </div>
          <div className="comment">
            <div className="user-info">
              <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="" />
                <p className="name">John Doe</p>
              </div>
              <div className="vote">
                <Rating name="no-value" value={5} /> 
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae est ab voluptatibus,
              eum corporis eius! Velit nobis vel maiores reprehenderit aperiam voluptatum? A cupiditate
              molestiae laborum soluta minus pariatur veritatis?
            </p>
          </div>
          <div className="comment">
            <div className="user-info">
              <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="" />
                <p className="name">John Doe</p>
              </div>
              <div className="vote">
                <Rating name="no-value" value={5} /> 
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae est ab voluptatibus,
              eum corporis eius! Velit nobis vel maiores reprehenderit aperiam voluptatum? A cupiditate
              molestiae laborum soluta minus pariatur veritatis?
            </p>
          </div>
        </div>
      </div>

      <div className="special-request">
        <p>If you have a special server request, you can <a href="/contact">contact us</a>.</p>
        <img src="/wandering.png" alt="" />
      </div>

    </div>
  )
}
