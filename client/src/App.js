import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Communities from './pages/Communities';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/mint' Component={Mint}></Route>
          <Route path='/communities' Component={Communities}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;