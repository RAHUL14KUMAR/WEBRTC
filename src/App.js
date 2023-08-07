
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Lobby from './screen/Lobby';
import Room from './screen/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lobby/>}/>
          <Route path='/room/:roomId' element={<Room/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
