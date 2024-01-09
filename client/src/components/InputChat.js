import { LuSend } from "react-icons/lu";

const InputChat = () => {
    return (
        <label id="input-chat-container" htmlFor="input-chat">
            <input id="input-chat"  placeholder="Type something..." />
            <span id="send-input-chat"><LuSend /></span>
        </label>
      
    );
  };
  
  export default InputChat;
  