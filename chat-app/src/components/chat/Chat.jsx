import { useEffect, useRef, useState } from 'react';
import '../chat/chat.css';
import EmojiPicker from 'emoji-picker-react';

const Block = ({ handleBlock, handleCancel }) => {
  return (
    <div className="modal">
      <p>Are you sure you want to block this user?</p>
      <div className="block-text">
        <button className='block-btn' onClick={handleBlock}>Block</button>
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there!", own: false },
    { text: "Hello! How are you?", own: true },
    { text: "I'm good, thanks for asking. How about you?", own: false },
    { text: "I'm doing well too. What are you up to today?", own: true },
    { text: "Just working on some projects. What about you?", own: false },
    { text: "Same here, working on some code. 😅", own: true },
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji);
    setOpen(false);
  };

  const handleBlock = () => {
    setIsBlocked(true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUnblock = () => {
    setIsBlocked(false);
  };

  const handleSendMessage = () => {
    if (!isBlocked && text.trim() !== '') {
      setMessages([...messages, { text, own: true }]);
      setText('');
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/picture/avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Adoifa</span>
            <p>@adoifa</p>
          </div>
        </div>
        <div className="icons">
          <img src="/picture/message.png" alt="Message" />
          <img src="/picture/phone.png" alt="Phone" />
          <img src="/picture/video.png" alt="Video" />
          <img src="/picture/setting.png" alt="Settings" onClick={() => setIsModalOpen(true)} />
        </div>
      </div>
      {!isBlocked ? (
        <>
          <div className="center">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.own ? 'own' : ''}`}>
                <div className="texts">
                  <p>{msg.text}</p>
                  <span>1 min ago</span>
                </div>
              </div>
            ))}
            <div ref={endRef}></div>
          </div>
          <div className="bottom">
            <div className="icons">
              <img src="/picture/bro.png" alt="Attachment" />
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <div className="emoji">
              <img src="/picture/emoji.svg" alt="Emoji" onClick={() => setOpen(prev => !prev)} />
              {open && (
                <div className="picker">
                  <EmojiPicker onEmojiClick={handleEmoji} />
                </div>
              )}
            </div>
            <button className="sendButton" onClick={handleSendMessage}>
              <img src="/picture/send.png" alt="Send" />
            </button>
          </div>
          {isModalOpen && <Block handleBlock={handleBlock} handleCancel={handleCancel} />}
        </>
      ) : (
        <div className="blockedMessage">
          <p>You have blocked this user.</p>
          <button onClick={handleUnblock}>Unblock</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
