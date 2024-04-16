import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'
import Profile from './pages/Profile';
import SearchResultsPage from './pages/SearchResultsPage';
import ChosenRecipe from './pages/ChosenRecipe';

function App() {
  return (
    <div className="h-screen w-screen sedan-regular bg-coffee-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<SearchResultsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chosenRecipe" element={<ChosenRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
