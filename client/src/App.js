import './App.css';
import display from './components/display';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={display} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
