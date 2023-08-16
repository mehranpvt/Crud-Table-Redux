import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/create' element={ <Create /> }></Route>
        <Route path='/update/:id' element={ <Update /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
