import { Route, Routes } from "react-router-dom"

import Homepage from "./components/Homepage"
import CharacterDetails from "./components/CharacterDetails"

function App() {

  return (
    <>
      
      <h1>React Characters App</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<h2>Page not found.</h2>} />
      </Routes>
      
      
    </>
  )
}

export default App
