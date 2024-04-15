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
  // Some default Recipes values you can use:
  // const obj1 = constructRecipe("Coffee", "This is a cup of coffee", [], [], "5.0")
  // const obj2 = constructRecipe("Iced Coffee", "This is a cup of iced coffee", [], [], "4.7")
  // const obj3 = constructRecipe("Mocha", "This is a cup of Mocha", [], [], "4.2")

  // addRecipe(obj1)
  // addRecipe(obj2)
  // addRecipe(obj3)


  // Some default Profile values you can use:
  // const obj4 = constructProfile("Johna", "Dee", [obj1, obj2, obj3], [obj2, obj3])
  // const obj5 = constructProfile("Jane", "Doe", [obj1, obj2], [obj1])
  // addProfile(obj4)
  // addProfile(obj5)
  
  return (
    <div className="h-screen w-screen">

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
