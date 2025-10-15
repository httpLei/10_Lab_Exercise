import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", due_date: "" });
  const [selected, setSelected] = useState(null);

  const API = "http://localhost:8080/assignments";

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get(API);
    setAssignments(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    fetchAssignments();
    setForm({ title: "", description: "", due_date: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchAssignments();
  };

  const handleSelect = async (id) => {
    const res = await axios.get(`${API}/${id}`);
    setSelected(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Assignments</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="due_date"
          type="date"
          value={form.due_date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {assignments.map((a) => (
          <li key={a.assignment_id}>
            <strong>{a.title}</strong> — {a.description} (Due: {a.due_date})
            <button onClick={() => handleSelect(a.assignment_id)}>View</button>
            <button onClick={() => handleDelete(a.assignment_id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selected && (
        <div style={{ marginTop: "20px" }}>
          <h3>📄 Selected Assignment</h3>
          <p><strong>Title:</strong> {selected.title}</p>
          <p><strong>Description:</strong> {selected.description}</p>
          <p><strong>Due Date:</strong> {selected.due_date}</p>
        </div>
      )}
    </div>
  );
}
