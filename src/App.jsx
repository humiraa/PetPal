import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import PetImage from "./Pet";
import AdoptButton from "./Adopt";
import Namepet from "./NamePet";
import Playarea from "./Playarea";

function App() {
  return(
    <>
  <Header />
    <PetImage />
    <AdoptButton/>
    <Namepet />


  <Footer />
  </>
  )
}

export default App;
