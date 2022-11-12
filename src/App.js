import logo from './logo.svg';
import './App.css';
import Shop from './Componants/Shop/Shop';
import Nav from './Componants/Nav/Nav';
import Ques from './Componants/Question/Ques';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>
      <Ques></Ques>
    </div>
  );
}

export default App;
