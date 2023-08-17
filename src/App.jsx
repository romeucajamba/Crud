import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ListUsers from './components/ListUsers';
import EditUser from './components/EditUser';
import CreateUsers from './components/CreateUsers';

function App() {
  return (
    <div>
      <h3>Crud com Reactjs, API PHP e MYSQL</h3> 
  
    <BrowserRouter>
      <nav className="App">
        <ul>
          <li>
            <Link to="./">Criação de Usuario</Link>
          </li>
          <li>
              <Link to="EditUser">Edição de usuario</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUsers/>}/>
        <Route path="CreatUser" element={<CreateUsers/>}/>
        <Route path="user/:id/edit" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
