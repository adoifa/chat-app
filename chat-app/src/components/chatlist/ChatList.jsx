import { useState } from 'react';
import './chatList.css';

const ChatList = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: 'Adoifa', lastMessage: 'Hello' },
    { id: 2, name: 'Adolf', lastMessage: 'Bye' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="list">
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src='/picture/search.png' alt='Search Icon' />
          <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => (
          <div className="item" key={user.id}>
            <img src="/picture/avatar.png" alt="" />
            <div className="texts">
              <span>{user.name}</span>
              <p>{user.lastMessage}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No users found!</p>
      )}
    </div>
    </div>
  );
}

export default ChatList;
