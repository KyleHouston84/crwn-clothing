import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/hats' element={<Hats />} />
      </Routes>
    </div>
  );
}

function Hats() {
  return <div> <h1>HATS</h1> </div>
}

export default App;
