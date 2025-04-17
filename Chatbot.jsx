import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    const confidence = parseFloat(Math.random().toFixed(2));
    const response = {
      role: 'bot',
      text: `This is a response to "${input}"`,
      confidence,
    };
    setMessages([...messages, { role: 'user', text: input }, response]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.role}`}>
            <div className="bubble">
              <p>{msg.text}</p>
              {msg.role === 'bot' && (
                <p className={msg.confidence < 0.6 ? 'low' : 'high'}>
                  Confidence: {msg.confidence}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}