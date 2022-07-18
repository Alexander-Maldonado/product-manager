import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OneProduct from './components/OneProduct';
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/product/:id' element={<OneProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
