import { useState } from 'react';
import './chatList.css';
import AddUser from './addUser/AddUser';

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src='/picture/search.png' alt='Search Icon' />
          <input type='text' placeholder='Search' />
        </div>
        <img className='add' src={addMode ? '/picture/minus.png' : '/picture/plus.png'} alt='Add Icon'
        onClick={()=> setAddMode((prev) => !prev )}
        />
      </div>
      <div className="item">
        <img src="/picture/avatar.png" alt="" />
        <div className="texts">
          <span>
            Jane Doe
          </span>
          <p>
            Hello
          </p>
        </div>
      </div>

      <div className="item">
        <img src="/picture/avatar.png" alt="" />
        <div className="texts">
          <span>
            Jane Doe
          </span>
          <p>
            Hello
          </p>
        </div>
      </div>
      <div className="item">
        <img src="/picture/avatar.png" alt="" />
        <div className="texts">
          <span>
            Jane Doe
          </span>
          <p>
            Hello
          </p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
