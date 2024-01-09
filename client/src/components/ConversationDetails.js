import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import MessageList from "./MessageList";
import InputChat from "./InputChat";

const ConversationDetails = () => {
  const { id } = useParams();
  const {
    data: messages,
    error,
    isPending,
  } = useFetch("http://localhost:5000/conversations/" + id + "/messages");

  return (
    <>
      <Header />
      <MessageList messages={messages} />
      <InputChat />
    </>
  );
};

export default ConversationDetails;
