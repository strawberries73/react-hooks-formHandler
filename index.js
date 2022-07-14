import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useInput } from "./useInput";

// Handling our form values by assigning them to state values
function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert('${titleProps.value} sounds like ${colorProps.value}');
    // Reset the sound and color
    resetTitle();
    resetColor();
  };

   return (
    <form onSubmit={submit}>
      <input
        {...titleProps} 
         type="text" 
         placeholder="Sound..." 
      />
      <input {...colorProps} type="color"/>
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
