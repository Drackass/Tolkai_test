import logo from "../logo.png";

const NewChat = ({addNewChat}) => {

  return (
    <div id="newChat" className="btn-pressure" onClick={() => addNewChat()} >
      <img src={logo} width={30} alt="tolkai" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
