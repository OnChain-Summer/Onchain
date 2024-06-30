import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Communities from './pages/Communities';
import Minted from './components/Minted'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/mint' Component={Mint}></Route>
          <Route path='/communities' Component={Communities}></Route>
          <Route path='/minted' Component={Minted}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;