let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function App() {
  function handelClick() {
    alert('Hello React Event');
  }

  function handelClick2() {
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX');
  }

  var names = ['arya', 'john', 'Bran'];

  return (
    <>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>How can I help you?</button>
      <div>
        {names.map((name) => (
          <button
            onClick={() => {
              alert(`Hello ${name}`);
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <Fruite />
    </>
  );
}

function Fruite() {
  return (
    <>
      <div>
        {fruits.map((each) => (
          <button onClick={() => alert(`this is ${each.value}`)} key={each.id}>
            {each.value}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
