import React from "react";

const MessageList = ({ messages }) => {
  // Function to convert date format
  const convertDateFormat = (inputDate) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    return new Date(inputDate).toLocaleString('en-US', options);
  };

  return (
    <div className="messages">
      {messages && messages.length === 0 && (
        <div id="no-messages">No messages yet.</div>
      )}

      {messages &&
        messages.map((message) => (
          <div
            className={`message ${message.author_id === 2 ? "bot-message" : ""}`}
            key={message.message_id}
          >
            <div className="message-body">
              {message.author_id === 1 && (
                <img
                  className="message-author"
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                  alt=""
                />
              )}
              {message.author_id === 2 && (
                <img
                  className="message-author"
                  src="https://cdn.shopify.com/app-store/listing_images/dae31bccb9b365b4b989ec88ff49fe1e/icon/CLOumoSko_gCEAE=.png"
                  alt=""
                />
              )}

              <div className="message-content">
                <p className="message-head">
                  {message.author}{" "}
                  <span>{convertDateFormat(message.timestamp)}</span>
                </p>
                <p>{message.content}</p>
                <p className=""></p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
