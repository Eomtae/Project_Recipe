import './App.scss';
import './media.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Component/Main'
import Recipe from './Component/Recipe'
import Detail from './Component/Detail'
import How from './Component/How'
import Nav from './Component/Nav';


function App() {
  return (

    <BrowserRouter>
    <div className='mainbox'>
    <img className='Whole' src='/img/background.jpg'></img>
      <main>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/Recipe" element={<Recipe/>}></Route>
          <Route path="/Detail/:id" element={<Detail/>}></Route>
          <Route path="/How/:id" element={<How/>}></Route>
        </Routes>
      </main>
      </div>
    </BrowserRouter>

  );
}

export default App;