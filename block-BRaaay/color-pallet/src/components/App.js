import allColor from '../color';

function App() {
  return (
    <>
      <div>
        <h1>Color Pallet UI</h1>
        {console.log(Object.keys(allColor))}
        {Object.keys(allColor).map((key) => (
          <Color name={key} allColor={allColor[key]} />
        ))}
      </div>
    </>
  );
}

function Color(props) {
  return (
    <>
      <div className="container">
        <p>{props.name}</p>
        <ul>
          {props.allColor.map((color, i) => (
            <li>
              <div
                className="color-box"
                style={{ backgroundColor: color }}
              ></div>
              <div className="about">
                <span>{i === 0 ? 50 : i * 100}</span>
                <span className="color-name">{color}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
