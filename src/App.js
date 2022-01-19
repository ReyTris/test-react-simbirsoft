import { Route, Routes } from 'react-router-dom';
import Competitions from './pages/Competitions/Competitions';
import CompetitionMatches from './pages/CompetitionMatches/CompetitionMatches';
import Main from './pages/Main/Main';
import Teams from './pages/Teams/Teams';
import './App.css';
import 'antd/dist/antd.css';
import TeamMatches from './pages/TeamMatches/TeamMatches';

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
          <Route exact path='teams/:id/matches' element={<TeamMatches/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;