import { useState } from 'react';
export default function Namepet(props) {
  const [newName, setNewName] = useState('');
  // function to pass back the entered name to the onNamepet call back
  function handleGo() {
    props.onNamePet(newName);
  }
  return (
    <div className="adoptPage">
      <img src="src/puppy.png" />
      <h2>Give your pet a name</h2>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter a name for your pet"
      ></input>
      <button
        className="adoptBtn"
        type="submit"
        onClick={() => {
          props.onNamePet(newName);
          handleGo();
        }}
      >
        Go
      </button>
    </div>
  );
}
