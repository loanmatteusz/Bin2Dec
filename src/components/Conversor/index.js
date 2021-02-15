import React, { useState } from 'react';
import './styles.css';

function Conversor() {

  const [state, setState] = useState(0);
  
  const handleState = () => {
    let text = document.getElementById('textInput').value ?
      document.getElementById('textInput').value : '0';

    setState(parseInt(text, 2));
  }

  return (
    <div className="Conversor">
      <div className="content">
        <label>BIN TO DEC</label>
        <p>
          Enter a <strong id="bin">binary number</strong>, get a <strong id="dec">decimal conversion</strong>.
        </p>
        <input id="textInput" type="text" onChange={handleState} />
        <p className="result">
          <label>
            {state}
          </label>
        </p>
      </div>
      <footer>
        <p>
          Made by <a href="https://github.com/loanmatteusz/Bin2Dec" target="_blank">@loanmatteusz</a>
          <br/>
          Challenge <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md"
            target="_blank"
          >
            Bin2Dec
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Conversor;
