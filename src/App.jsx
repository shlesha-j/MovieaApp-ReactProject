
// import { Routes } from 'react-router-dom';
import './App.css';
import Favorites from './pages/Favorites';
import Home from "./pages/Home";
import DummyPage from "./pages/Dummy";
import Socials from "./pages/Socials";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/dummy" element={<DummyPage />} />
          <Route path='/socials' element={<Socials />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}



export default App
