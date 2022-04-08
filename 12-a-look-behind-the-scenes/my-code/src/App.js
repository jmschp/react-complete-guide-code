import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";

import "./App.css";

function App() {
  console.log("App component evaluated");

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
    </div>
  );
}

export default App;
