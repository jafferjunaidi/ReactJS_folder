import React from 'react'
import './App.css'
import { createContext } from 'react'
import First from './First'

export let data = createContext();
export const age = createContext();

function App() {

  return (
    <>
     <data.Provider value={'Jaffer Junaidi'}>
        <age.Provider value={22}>
      <First/>
      </age.Provider>
     </data.Provider>
    </>
  )
}

export default App
