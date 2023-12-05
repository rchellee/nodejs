import "./App.css";
import { User } from'./User';

function App() {

  const planets = [
    { planetName: "Earth", isRockPlanet: true },
    { planetName: "Mars", isRockPlanet: true },
    { planetName: "Venus", isRockPlanet: true },
    { planetName: "Jupiter", isRockPlanet: false },
    { planetName: "Neptune", isRockPlanet: false },
    { planetName: "Uranus", isRockPlanet: false },
    { planetName: "Mercury", isRockPlanet: true },
    ];

  // return <div className='App'>
  //   <h2>Planets</h2>
  //   {planets.map((user, key) => {
  //     return <User planetName={user.planetName} isRockPlanet={user.isRockPlanet=false} />
  //   })}
  //   <h2>Gas Planets</h2>
  // </div>
  const allPlanets = planets.map((planet, key) => <User key={key} planetName={planet.planetName} />);
  const gasPlanets = planets.filter(planet => !planet.isRockPlanet).map((planet, key) => <User key={key} planetName={planet.planetName} />);

  return (
    <div className='App'>
      <h1 className='name'>Planets</h1>
      <h2 className='title-1'>{allPlanets} </h2>

      <h1 className='name'>Gas Planets</h1>
      <h2 className='title-1'>{gasPlanets} </h2>
    </div>
  );

}


export default App;
