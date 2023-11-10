import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PetImage from './Pet';
import AdoptComponent from './Adopt';
import Namepet from './NamePet';
import Playarea from './Playarea';

function App() {
  // states:
  // a pet name for user to input
  const [petName, setPetName] = useState('');
  // a fullness state to indicate the pet's hunger level
  const [fullness, setFullness] = useState(50);
  // a happiness state to indicate the pet's happiness level
  const [happiness, setHappiness] = useState(50);
  // a state to switch between different components
  const [currentPage, setCurrentPage] = useState('adopt-page');

  /// helper functions

  // handle adopt and set page to name pet

  function handleAdopt() {
    setCurrentPage('nameApet');
  }
  // name pet and set page to play-area

  function handleNamePet(name) {
    setPetName(name);
    setCurrentPage('play-area');
  }
  // function to update fullness of a pet
  function handleFeed() {
    // logic to update pet's fullness level
  }
  function handlePlay() {
    // logic to update pet's happiness level
  }
  function handleBath() {
    // logic to update pet's happiness level
  }

  return (
    <div className="App">
      <Header />
      {currentPage === 'adopt-page' && <AdoptComponent onAdopt={handleAdopt} />}
      {currentPage === 'nameApet' && <Namepet onNamePet={handleNamePet} />}
      {currentPage === 'play-area' && (
        <Playarea
          petName={petName}
          petFullness={fullness}
          petHappiness={happiness}
          onFeed={handleFeed}
          onPlay={handlePlay}
          onBath={handleBath}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
