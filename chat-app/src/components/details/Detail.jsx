import { auth } from '../../lib/firebase'
import '../details/detail.css'

const Detail = () => {
  return (
    <div className='detail'>
  <div className="user">
    <div className="text-user">
      <h2>Adoifa</h2>
      <p>last seen recently</p>
    </div>
  </div>
  <div className="info">
    <div className="option">
      <div className="title">
        <p>Phone</p>
        <span>+123456789</span>
      </div>
    </div>
    <div className="option">
      <div className="title">
        <p>Username</p>
        <span>@adoifa</span>
      </div>
    </div>
    <div className="option">
      <div className="title togg">
        <p>Notifications</p>
        <div className="toggle-switch">
          <input type="checkbox" id="toggle" className="toggle-input" />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
      <div className="photos">
        <div className="photoitem">
          <div className="photodetail">
            <p className='active'>Media</p>
            <p>Files</p>
            <p>Links</p>
            <p>Music</p>
            <p>Voice</p>
            <p>Group</p>
          </div>
        </div>
        <div className="im">
            <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pic">
          <div className="photoitem">
            <div className="photodetail">
              <img src="/picture/msgimg.jpg" alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="option">
          </div>
          <button>
            Block User
          </button>
        </div>
  </div>

  )
}

export default Detail