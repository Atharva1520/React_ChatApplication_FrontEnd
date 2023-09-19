import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LoginBox from './components/LoginBox';
import MainContainer from './components/MainContainer.js';
import Welcome from './components/Welcome';
import Chatarea from './components/Chatarea';
import ListContainer from './components/ListContainer';
import CreateGroup from './components/CreateGroup';
import Groups from './components/Groups';
import RegistrationBox from './components/RegistrationBox';


function App() {
  return (
   <div className="app">
    <Routes>
      <Route path='/' element={<LoginBox/>} />
      <Route path='/register' element={<RegistrationBox/>} />
      <Route path='app' element={<MainContainer/>}>
      <Route path='welcome' element={<Welcome/>} />
      <Route path='chat' element={<Chatarea/>} />
      <Route path='users' element={<ListContainer/>} />
      <Route path='groups' element={<Groups/>} />
      <Route path='create-groups' element={<CreateGroup/>} />
      </Route>
    </Routes>
   </div>
  );
}

export default App;
