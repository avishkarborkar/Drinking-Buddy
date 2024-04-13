import React, { useState } from 'react';
//import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import Board from './components/Board';
import Drink from './components/Drink';



function App() {

  const [isDrink, setIsDrink] = useState();

  return (
    <>
    <div className='w-full h-2px bg-black text-purple-500 grid place-content-center py-12 text-3xl'>Drinking Buddy 
    </div>
    <div className="bg-black min-h-screen w-full flex justify-center items-center"
    style={{marginTop: "-50px"}}>
      <div className='w-full'>
        {isDrink ? <Drink setIsDrink={setIsDrink}/> : <Board setIsDrink={setIsDrink}/>}
      </div>
    </div>
    </>
  );
}

export default App;
