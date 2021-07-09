import './App.css';
import React, {useState, useMemo, useCallback, useEffect} from 'react';

function App() {

  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  
  const [name, setName] = useState("");

 

  const displayName = useCallback(
    () => {
      return name;
    },
    [name],
  )

 
  return (
    <div className="App">
        <div>
          Factorial of {counter} is {result}
        </div>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <div>
          <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
          Name: {name}
        </div>
        <DisplayName displayName={displayName}></DisplayName>
        
    </div>
  );
};

const DisplayName = ({displayName}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName())
  }, [displayName]);
  return <div>
      {value}
  </div>
};

const factorial = (num) => {
  if(num < 0){
    return -1;
  }

  if (num === 0){
    return 1;
  }

  return num * factorial(num-1);
}
export default App;
