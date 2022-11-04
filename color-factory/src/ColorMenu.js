import React, {useState} from 'react';

function ColorMenu({addColor}) {

  const [showing, setShowing] = useState(false);
  const [colorText, setColorText] = useState("");

  const clickAddColor = (e) => {
    e.preventDefault();
    addColor(colorText.replace(/ /g, "-"));
    setColorText("");
  }

  return (
    <div className="ColorMenu">
      <h1>Colors!</h1>
      <div><input placeholder="color" hidden={!showing} value={colorText} onChange={e => setColorText(e.target.value)} /></div>
      <div><button hidden={!showing} onClick={clickAddColor}>Add Color</button></div>
      <div><button onClick={() => setShowing(!showing)}>{showing ? "Hide Form" : "Show Form"}</button></div>
    </div>
  )
}

export default ColorMenu;