
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';

import gptImgLogo from  './assets/chatgptLogo.svg'
function App() {
  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
           <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="band">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn"/> New Chat</button>
           <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query"/> What is Programming ?</button>
            <button className="query"><img src={msgIcon} alt="Query"/> How to use an API ?</button>
           </div>
           
           
          </div>
          <div className="lowerSide">
          <div className="listItems"><img src={home} className="listItemsImg"/>Home</div>
          <div className="listItems"><img src={saved} className="listItemsImg"/>Saved</div>
          <div className="listItems"><img src={rocket} className="listItemsImg"/>Upgrade to pro</div>
          </div>
    </div>
     <div className="main">
     <div className="chats">
      <div className="chat">
        <img className='chatImg' src={gptImgLogo}alt=""/><p className="txt">Build your own version of ChatGPT In React JS Using OpenAI API | Create ChatGPT Clone Using React </p>
      </div>
      <div className="chat bot">
        <img className='chatImg' src={gptImgLogo}alt=""/><p className="txt">Build your own version of ChatGPT In React JS Using OpenAI API | Create ChatGPT Clone Using React </p>
      </div>
     </div>
     <div className="chatFooter">
    <div className="inp">
      <input type="text" placeholder='send a message' /><button className="send"><img src={sendBtn} alt="" /></button>
    </div>
    <p>ChatGPT can make mistakes. Check important info.</p>
     </div>

     </div>
    </div>
  );
}

export default App;
