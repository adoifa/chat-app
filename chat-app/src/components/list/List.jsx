import '../list/list.css'
import Userinfo from './info/UserInfo'
import ChatList from '../list/chatlist/ChatList'

const List = () => {
  return (
    <div className='list' >
      <Userinfo />
      <ChatList />
    </div>
  )
}

export default List