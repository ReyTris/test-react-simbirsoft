import { Route, Routes } from 'react-router-dom';
import Competitions from './pages/Competitions/Competitions';
import CompetitionMatches from './pages/CompetitionMatches/CompetitionMatches';
import Main from './pages/Main/Main';
import Teams from './pages/Teams/Teams';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main/>}>
          <Route exact path='competitions' element={<Competitions/>}>
          </Route>
          <Route exact path='competitions/:id/matches' element={<CompetitionMatches/>}/>
          <Route exact path='teams' element={<Teams/>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;