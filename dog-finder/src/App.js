
import './App.css';
import Nav from './Nav';
import Dog from './Dog';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import duke from './resources/dog-pictures/duke.jpg';
import perry from './resources/dog-pictures/perry.jpg';
import tubby from './resources/dog-pictures/tubby.jpg';
import whiskey from './resources/dog-pictures/whiskey.jpg';


function App({dogs}) {
  return (
    <BrowserRouter>
      <Nav links={dogs.map(dog => dog.name)}/>
      <Routes>
        {dogs.map(dog => <Route 
          path={"/" + dog.name} 
          element={
            <Dog name={dog.name} age={dog.age} facts={dog.facts} imgSrc={dog.src} />
          }/>
        )}
        <Route path="/" element={<div><h1>Hello Please Click Dogs</h1></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
