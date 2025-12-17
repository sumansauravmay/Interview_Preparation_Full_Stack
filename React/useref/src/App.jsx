import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

function App() {
 const ref=useRef(null);

 const submitBtn=()=>{
  ref.current.focus();
  console.log(ref.current.value);
 }

  return (
    <>
   <input ref={ref} type="text"/>
   <button onClick={submitBtn}>Focus</button>
    </>
  )
}

export default App
