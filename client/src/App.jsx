import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import StarredProducts from "./pages/StarredProducts"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/starred" element={<StarredProducts />} />
    </Routes>
  )
}

export default App
