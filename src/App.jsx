import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import './App.css'
import Profile from './pages/Profile';
import SearchResultsPage from './pages/SearchResultsPage';
import constructRecipe from './components/constructRecipe';
import constructProfile from './components/constructProfile';
import addRecipe from './components/addRecipe'
import addProfile from './components/addProfile'

function App() {
  return (
    <div className="h-screen w-screen sedan-regular bg-coffee-light">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
