import { auth } from '../../lib/firebase'
import '../details/detail.css'

const Detail = () => {
  return (
    <div className='detail' >
      <div className="user">
        <img src="/picture/avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>
                Chat Setting
              </span>
              <img src="/picture/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>
                Privacy & help
              </span>
              <img src="/picture/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>
                Shared photos
              </span>
              <img src="/picture/arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoitem">
                <div className="photodetail">
                  <img src="/picture/msgimg.jpg" alt="" />
                <span>
                  photo_2024_2.png
                </span>
                </div>
                <img className='icon' src="/picture/download.png" alt="" /> 
              </div>
              <div className="photoitem">
                <div className="photodetail">
                  <img src="/picture/msgimg.jpg" alt="" />
                <span>
                  photo_2024_2.png
                </span>
                </div>
                <img className='icon' src="/picture/download.png" alt="" /> 
              </div>
              <div className="photoitem">
                <div className="photodetail">
                  <img src="/picture/msgimg.jpg" alt="" />
                <span>
                  photo_2024_2.png
                </span>
                </div>
                <img className='icon' src="/picture/download.png" alt="" /> 
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>
                Shared Files
              </span>
              <img src="/picture/arrowUp.png" alt="" />
            </div>
          </div>
          <button>
            Block User
          </button>
          <button className='logout' onClick={()=>auth.signOut()} >
            Logout
          </button>
        </div>
    </div>
  )
}

export default Detail