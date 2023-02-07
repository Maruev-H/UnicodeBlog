import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import PostPage from './components/PostPage/PostPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />}/>
        <Route path='/category/:id' element={<CategoryPage />}/>
        <Route path='/post/:id' element={<PostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
