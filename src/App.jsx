import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'
import Profile from './pages/Profile';
import SearchResultsPage from './pages/SearchResultsPage';
import UploadRecipe from './pages/UploadRecipe';
import ChosenRecipe from './pages/ChosenRecipe';
/**
 * The App component renders a React application with a navigation bar and routes for different pages
 * like Home, Search Results, Profile, Upload Recipe, and Chosen Recipe.
 * @returns The App component is being returned, which contains a div with specific classes for
 * styling, a Router component from React Router, a Navbar component, and multiple Route components
 * defining different paths and their corresponding elements.
 */

function App() {
  return (
    <div className="h-screen w-screen sedan-regular bg-coffee-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<SearchResultsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<UploadRecipe />}/>
          <Route path="/chosenRecipe" element={<ChosenRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
