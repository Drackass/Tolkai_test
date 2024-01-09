import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ConversationList from "./ConversationList";
import NewChat from "./NewChat";
import { useEffect, useState } from "react";

const Sidebar = () => {
  // const [Conversations, setConversations] = useState(null);
  // const { data, isPending, error } = useFetch(
  //   "http://localhost:5000/conversations"
  // );

  // useEffect(() => {
  //   fetch("http://localhost:5000/conversations")
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setConversations(data);
  //     })
  //   }, [])

  const [conversations, setConversations] = useState([]);

  const history = useHistory();

  const addNewChat = async e => {
    try {
      const body = {
        user_id: 1,
        assistant_id: 2,
        title: "New Chat"
      };
      const response = await fetch("http://localhost:5000/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const responseData = await response.json(); // Ajoutez cette ligne pour extraire les données JSON
      console.log(responseData);
      setConversations([responseData, ...conversations]);
      history.push('/conversations/' + responseData.conversation_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getConversations = async () => {
    try {
      const response = await fetch("http://localhost:5000/conversations");
      const jsonData = await response.json();

      setConversations(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return (
    <div className="sidebar">
      <NewChat addNewChat={addNewChat}/>
      <hr />
      <ConversationList conversations={conversations} />
    </div>
  );
};

export default Sidebar;
