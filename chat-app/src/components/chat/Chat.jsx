import { useEffect, useRef, useState } from 'react'
import '../chat/chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  },[])

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }

  return (
    <div className='chat' >
      <div className="top">
        <div className="user">
          <img src="/picture/avatar.png" alt="" />
          <div className="texts">
            <span>
              Jane Doe
            </span>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="/picture/phone.png" alt="" />
          <img src="/picture/video.png" alt="" />
          <img src="/picture/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/picture/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message">
          <img src="/picture/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message">
          <img src="/picture/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="/picture/msgimg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Doloribus libero tempora aliquid sapiente! Porro earum
                perferendis distinctio officiis rem, facere mollitia
                 unde quasi inventore nemo, minus optio aliquam sit!
                  Fugiat.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
      <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className="icons">
         <img src="/picture/img.png" alt="" />
         <img src="/picture/camera.png" alt="" />
         <img src="/picture/mic.png" alt="" />
          </div>
           <input type="text" placeholder='Type a message...' value={text} onChange={e => setText(e.target.value)} />
          <div className="emoji">
            <img src="/picture/emoji.png" alt="" onClick={()=>setOpen((prev) => !prev ) } />
            <div className="picker">
             <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className='sendButton'>
            Send
          </button>
        </div>
      
    </div>
  )
}

export default Chat