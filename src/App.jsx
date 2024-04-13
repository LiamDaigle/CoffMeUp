import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import './App.css'
import Profile from './pages/Profile';
import SearchResultsPage from './pages/SearchResultsPage';
import constructRecipe from './components/constructRecipe';
import addRecipe from './components/addRecipe'

function App() {
  // Some default values you can use:
  // const obj1 = constructRecipe("Coffee", "This is a cup of coffee", [], [], "5.0")
  // const obj2 = constructRecipe("Iced Coffee", "This is a cup of iced coffee", [], [], "4.7")
  // const obj3 = constructRecipe("Mocha", "This is a cup of Mocha", [], [], "4.2")

  // addRecipe(obj1)
  // addRecipe(obj2)
  // addRecipe(obj3)
  
  return (
    <div className="h-screen w-screen">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
