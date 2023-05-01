import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Ipad from './router/ipad/ipad';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/ipad' element={<Ipad/>}/>
      </Routes>
      
       </div>
  );
}

export default App;
