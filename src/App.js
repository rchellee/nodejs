import './App.css';

function App() {

const name = <h1> Ritchelle </h1>
const age = <h1> 21 </h1>
const email = <h1> ritchellerueras@gmail.com </h1>
const user = (<div>
      {name}
      {age}
      {email}
  </div>)

  return (
    <div className="App">
      {user}
      {user}
      {user}


    </div>
  );
}

export default App;
