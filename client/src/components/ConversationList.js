// import { RiChat1Fill } from "react-icons/ri";
// import { Link } from 'react-router-dom';

// const ConversationList = ({ conversations }) => {
//   return (
//     <>
//       <p className="sub-title">Conversations</p>
//       {conversations.map((conversation) => (
//         <Link to={`/conversations/${conversation.conversation_id}`} className="sidebar-item" id={conversation.conversation_id} key={conversation.conversation_id}>
//           <span><RiChat1Fill /></span>
//           <p>{conversation.title}</p>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default ConversationList;

import { RiChat1Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const groupConversationsByDate = (conversations) => {
  const groupedConversations = {};

  conversations.forEach((conversation) => {
    const date = new Date(conversation.timestamp).toDateString();
    if (!groupedConversations[date]) {
      groupedConversations[date] = [];
    }
    groupedConversations[date].push(conversation);
  });

  return groupedConversations;
};

const ConversationList = ({ conversations }) => {
  const groupedConversations = groupConversationsByDate(conversations);

  return (
    <div id="conversations-list">
      {Object.keys(groupedConversations).map((date) => (
        <div key={date}>
          <p className="sub-title">{date}</p>
          {groupedConversations[date].map((conversation) => (
            <Link
              to={`/conversations/${conversation.conversation_id}`}
              className="sidebar-item btn-pressure"
              id={conversation.conversation_id}
              key={conversation.conversation_id}
            >
              <span><RiChat1Fill /></span>
              <p>{conversation.title}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
