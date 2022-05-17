import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path='/blogs/:id' element= {<BlogDetails />}/>
          <Route path ='*' element= {<NotFound />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
