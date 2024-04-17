import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Books from './pages/Books';
import Recipe from './pages/Recipe';
import Book from './pages/Book';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
