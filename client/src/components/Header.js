import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { BiConversation } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const Header = () => {
  const { id } = useParams();
  const [conversationData, setConversationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/conversations/${id}`
        );
        const data = await response.json();
        setConversationData(data[0]); // Assuming the API returns an array, and you want the first element
      } catch (error) {
        console.error("Error fetching conversation data:", error);
      }
    };

    fetchData();
  }, [id]);

  // Function to convert date format
  const convertDateFormat = (inputDate) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Date(inputDate).toLocaleString("en-US", options);
  };

  return (
    <>
      {conversationData && (
        <div id="header">
          <div className="scrollProgress"></div>
          <div id="header-left">
            <span className="menu">
              <HiOutlineMenuAlt1 />
            </span>
            <span className="icon-box">
              <BiConversation />
            </span>
            <p>
              <span className="text-green">
                {conversationData.message_count} Messages
              </span>{" "}
              <span className="text-grey">/</span>{" "}
              <span className="text-green">{conversationData.user_name}</span>{" "}
              <span className="text-grey">/</span>{" "}
              <span className="text-green">{conversationData.bot_name}</span>{" "}
              <span className="text-grey">/</span> {conversationData.title}
            </p>
          </div>

          <div id="header-right">
            <p>
              <span className="text-grey">
                {convertDateFormat(conversationData.conversation_date)}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
