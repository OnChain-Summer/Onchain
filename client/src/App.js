import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/mint' Component={Mint}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;