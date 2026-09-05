import { useState } from "react";

// import Header from "@components/Header";

import "./App.css";

function App() {
  // state variables
  const [loggedIn] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  // handle play button click
  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      console.log("Enter key is pressed. Input value: ", e);
      console.log("Input value: ", inputValue);
    }
  };

  //  handle play button click
  const handlePlayClick = (e: React.MouseEvent) => {
    console.log("Play button clicked. Input value: ", e);
  };

  // return statement 
  return (
    <div className={"appContainer"}>
      {/* <Header /> */}
      <section className="heroSection">
        <div className="heroCopy">
          <p className="eyebrow">A better kind of daily ritual</p>
          <h2>Find your next five-letter obsession.</h2>
          <p className="heroDescription">
            Play a shared puzzle or make one that is unmistakably yours.
          </p>
        </div>

        <div className="idInputContainer">
          <div className="panelHeading">
            <span className="panelNumber">01</span>
            <div>
              <p className="panelEyebrow">Jump into a puzzle</p>
              <h3>Play Wordle</h3>
            </div>
          </div>
          <label htmlFor="idInput">Enter a puzzle ID or paste its URL</label>
          <div className="playControls">
            <input
              id="idInput"
              placeholder="e.g. wordle/bright"
              onKeyUp={(e) => handleInputKeyUp(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
            <button className="primaryButton" onClick={(e) => handlePlayClick(e)}>
              Play <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {loggedIn && <div className="statusMessage">Logged In</div>}
      {!loggedIn && (
        <div className="createPrompt">
          <div>
            <p className="panelEyebrow">For puzzle makers</p>
            <h3>Make something worth sharing.</h3>
            <p>Build a custom Wordle and send it to your favorite people.</p>
          </div>
          <button className="secondaryButton">Log in <span aria-hidden="true">→</span></button>
        </div>
      )}
      </section>
    </div>
  );
}

export default App;
