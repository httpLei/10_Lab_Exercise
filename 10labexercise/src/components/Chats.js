import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Chats() {
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState(null);

  const API = "http://localhost:8080/chats";

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const res = await axios.get(API);
    setChats(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, { content, timestamp: new Date().toISOString() });
    fetchChats();
    setContent("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchChats();
  };

  const handleSelect = async (id) => {
    const res = await axios.get(`${API}/${id}`);
    setSelected(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 Chats</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {chats.map((c) => (
          <li key={c.chat_id}>
            {c.content} <em>({new Date(c.timestamp).toLocaleString()})</em>
            <button onClick={() => handleSelect(c.chat_id)}>View</button>
            <button onClick={() => handleDelete(c.chat_id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selected && (
        <div style={{ marginTop: "20px" }}>
          <h3>🗨️ Selected Chat</h3>
          <p><strong>Message:</strong> {selected.content}</p>
          <p><strong>Time:</strong> {new Date(selected.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
