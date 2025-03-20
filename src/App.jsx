import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  )
}

export default App
