/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Handling our form values by assigning them to state values
function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert('${sound} sounds like ${color}');
    // Reset the sound and color
    setSound("");
    setColor("#000000");
  };

   return (
    <form onSubmit={submit}>
      <input
        value={sound} 
         type="text" 
         placeholder="Sound..." 
         onChange={(e) => setSound(e.target.value)}
      />
      <input value={color} type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

