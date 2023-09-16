import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/movie/:imdbID'} element={<MovieDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
