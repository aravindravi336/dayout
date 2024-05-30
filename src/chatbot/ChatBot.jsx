import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './Config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function ChatBott() {
  return (
    <div>      <Chatbot Config={config} messageParser={MessageParser} actionProvider={ActionProvider} />    </div>
  );
}

export default ChatBott;



