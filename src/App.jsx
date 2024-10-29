import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"

function App() {


  return (
    <>
      
      <h1>React Characters App</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<h2>Page not found.</h2>} />
      </Routes>
      
      
    </>
  )
}

export default App
