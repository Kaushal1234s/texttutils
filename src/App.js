// these import are important

// import './App.css';
import Navbar from './components/Navbar';         //components ke andar navbar wali file import kar li
import TextForm from './components/TextForm';      //components ke andar TextForm wali file import kar li
import React from 'react';

export default function App() {

  return (
    <>

{/* my-means margin in y axis and mx-means margin in x axis*/}

{/* yaha hum sirf Navbar ko return kar rahe h joki Navbar.js mein bana pada h */}
{/* yaha humne title likha toh hum basically props pass kar rahe h */}
{/* yaha jo bhi title or abouttext likhnege woh Navbar.j  ki line 18 and 28 mein dekhega */}
<Navbar title="TextUtils" aboutText="About"/>                            
<div className="container my-3">
  <TextForm title="Enter the text to analyze below"/>
</div>

    </>
  );
}

// export default App;
