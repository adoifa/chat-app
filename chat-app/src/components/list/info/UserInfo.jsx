import '/home/fateme/Documents/react-projects/chat-app/chat-app/src/components/list/info/userinfo.css';

const Userinfo = ({ currentUser }) => {
  return (
    <div className='userinfo'>
      <div className="user">
        <img src={currentUser?.avatar || '/picture/avatar.png'} alt='User Avatar' />
        <h2>
          {currentUser?.username || 'Guest'}
        </h2>
      </div>
      <div className="icons">
        <img src='/picture/more.png' alt='More Icon' />
        <img src='/picture/video.png' alt='Video Icon' />
        <img src='/picture/edit.png' alt='Edit Icon' />
      </div>
    </div>
  );
}

export default Userinfo;

